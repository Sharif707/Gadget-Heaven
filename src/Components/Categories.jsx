import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Cards from "./Cards";

const Categories = () => {
  const { category } = useParams();
  
  console.log(category);

  const categoriesdata = useLoaderData();
 
  const [products, setProducts] = useState(categoriesdata);

  useEffect(() => {
    if (category) {
     if(category === 'All'){
     setProducts(categoriesdata)
     }
     else {
      const filteredArray = [...categoriesdata].filter(
        (product) => product.category === category
      );
    
      setProducts(filteredArray);
     }
    } 
    else {
      setProducts(products.slice(0, 6));
    }
  }, [category, categoriesdata]);
 
  return (
    <>
      <div
        className={`col-span-3 ${
          products.length
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            : ""
        }`}
      >
        {products.length > 0 ? 
        (
          products.map((category) => (
            <Cards
              key={category.product_id}
              categorydata={category}
              isEmpty={false}/>))) : (<Cards key={category.product_id} isEmpty={true} />)}
      </div>
    
    </>
  );
};

export default Categories;

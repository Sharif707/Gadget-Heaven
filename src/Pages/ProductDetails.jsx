import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SpecificDetail from "../Components/SpecificDetail";
import { getCartdata } from "../utils/localStorage";

const ProductDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
 
  const [productdetails, setProductDetails] = useState({});
  const [isDisabled, setisDisabled] = useState(false);
  const [isDisabledwishlist, setisDisabledwishlist] = useState(false);

  useEffect(() => {
    const foundData = data.find((product) => product.product_id == id);
    setProductDetails(foundData);

    const cartData = getCartdata();
    const isExist = cartData.find(
      (singleCart) => singleCart.product_id == foundData.product_id
    );
    if (isExist) {
      setisDisabled(true);
    }
  }, [id, data]);
 

  return (
    <div className="bg-[#9538E2] min-h-[280px] relative  pt-14 ">
      <h1 className="text-3xl font-bold text-white leading-normal text-center">
        Product Details
      </h1>
      <p className="my-4 text-white w-3/5 mx-auto text-center">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>

      <SpecificDetail
      ficDetail
        isDisabled={isDisabled}
        setisDisabled={setisDisabled}
        isDisabledwishlist={isDisabledwishlist}
        setisDisabledwishlist={setisDisabledwishlist}
        productdetails={productdetails}
      ></SpecificDetail>
    </div>
  );
};

export default ProductDetails;

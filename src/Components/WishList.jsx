import React, { useState, useEffect } from "react";

import { getWishedData, removeitemfromwishlist } from "../utils/localStorage";
import WishListProduct from "./WishListProduct";

const WishList = () => {
  const [selectedwishProduct, setselectedwishProduct] = useState([]);

  useEffect(() => {
    const favorites = getWishedData();
    setselectedwishProduct(favorites);
  }, []);

  const handleRemoved = (id) => {
    console.log(id);
    removeitemfromwishlist(id);
    const wishFavourites = getWishedData();
    setselectedwishProduct(wishFavourites);
  };
  return (
    <div>
      <div className="flex justify-between items-center my-4">
        <div>
          <h2 className="text-xl font-bold" t>
            WishList
          </h2>
        </div>
      </div>
      <div>
        {selectedwishProduct.map((wishedproduct) => (
          <WishListProduct
            key={wishedproduct.product_id}
            wishedproduct={wishedproduct}
            handleRemoved={handleRemoved}
          ></WishListProduct>
        ))}
      </div>
    </div>
  );
};

export default WishList;

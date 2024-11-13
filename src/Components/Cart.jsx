import React, { useState, useEffect } from "react";
import CartProduct from "./CartProduct";
import { removeFavorite, getCartdata } from "../utils/localStorage";
import Modal from "./modal";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [total, setTotal] = useState(0);
  const [ismodalOpen, setisModalOpen] = useState(false);
  const navigate = useNavigate();

  const [sortedProduct, setSortedProduc] = useState([]);
  useEffect(() => {
    const favorites = getCartdata();
    console.log(favorites);
    setSelectedProduct(favorites);
  }, []);
  useEffect(() => {
    const favorites = getCartdata();
    const totalsum = favorites.reduce(
      (accc, currentVal) => accc + currentVal.price,
      0
    );
    setTotal(totalsum);
  }, [selectedProduct]);
  const handleRemove = (id) => {
    removeFavorite(id);
    const favorites = getCartdata();
    setSelectedProduct(favorites);
  };
  const sortProductInOrder = () => {
    const sortedArray = selectedProduct.sort((a, b) => b.price - a.price);
    setSortedProduc(sortedArray);
  };
  const closePurchase = (val) => {
    setisModalOpen(val);
    navigate("/");
    localStorage.removeItem("favourites");
  };

  return (
    <div>
      <div className="flex justify-between items-center my-4">
        <div>
          <h2 className="text-xl font-bold" t>
            Cart
          </h2>
        </div>

        {selectedProduct.length >= 0 && (
          <div className="flex gap-6 items-center">
            <h1 className="text-xl font-bold">Total Cost: {total}</h1>
            <button
              onClick={sortProductInOrder}
              className="text-lg rounded-3xl btn btn-success text-white"
            >
              Sort by Price
            </button>

            <button
              disabled={selectedProduct.length <= 0}
              onClick={() => setisModalOpen(true)}
              className="text-lg rounded-3xl btn btn-success text-white"
            >
              Purchase
            </button>
          </div>
        )}
      </div>
      <div>
        {selectedProduct.map((cartProduct, idx) => (
          <CartProduct
            key={idx}
            cartProduct={cartProduct}
            handleRemove={handleRemove}
          ></CartProduct>
        ))}
      </div>

      {ismodalOpen && (
        <Modal price={total} closePurchase={closePurchase}></Modal>
      )}
    </div>
  );
};

export default Cart;

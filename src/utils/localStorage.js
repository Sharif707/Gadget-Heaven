import toast from "react-hot-toast";

const getCartdata = () => {
  const all = localStorage.getItem("favourites");
  if (all) {
    const favourites = JSON.parse(all);

    return favourites;
  } else {
    return [];
  }
};

const addtoCart = (product) => {
  // 1. get all previously data
  const favourites = getCartdata();
  const isExist = favourites.find(
    (singleproduct) => singleproduct.product_id == product.product_id
  );
  if (isExist) return toast.error("This product already added once!");
  favourites.push(product);
  localStorage.setItem("favourites", JSON.stringify(favourites));
  toast.success("This product has been added to the Cart");
};
const addToWishlist = (product) => {
  const favouriteswishdata = getWishedData();
  const isExist = favouriteswishdata.find(
    (singleproduct) => singleproduct.product_id == product.product_id
  );
  if (isExist) return toast.error("This product already added once!");
  favouriteswishdata.push(product);
  localStorage.setItem("wishfavourites", JSON.stringify(favouriteswishdata));
  toast.success("This product has been added to the wishlist");
};

const getWishedData = () => {
  const all = localStorage.getItem("wishfavourites");
  if (all) {
    const favourites = JSON.parse(all);

    return favourites;
  } else {
    return [];
  }
};

const removeFavorite = (id) => {
  console.log(id);
  const favorites = getCartdata();
  console.log(favorites);
  const remaining = favorites.filter(
    (product) => product.product_id !== id.product_id
  );
  console.log(remaining);
  localStorage.setItem("favourites", JSON.stringify(remaining));
  toast.success("Successfully Removed From Cart!");
};
const removeitemfromwishlist = (id) => {
  console.log(id);
  const favorites = getWishedData();
  console.log(favorites);
  const remaining = favorites.filter(
    (product) => product.product_id !== id.product_id
  );
  console.log(remaining);
  localStorage.setItem("wishfavourites", JSON.stringify(remaining));
  toast.success("Successfully Removed From WishList!");
};

export {
  addtoCart,
  getCartdata,
  getWishedData,
  addToWishlist,
  removeFavorite,
  removeitemfromwishlist,
};

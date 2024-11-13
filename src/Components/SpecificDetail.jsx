import { addtoCart, addToWishlist, getCartdata } from "../utils/localStorage";

const SpecificDetail = ({ productdetails, setisDisabled, isDisabled, isDisabledwishlist, setisDisabledwishlist }) => {
  const {
    product_id,
    product_title,
    product_image,
    price,
    availability,
    Specification,
    description,
    rating,
  } = productdetails || {};
  const handleAddtoCart = (product) => {
    addtoCart(product);
    setisDisabled(true);
  };
  const handleAddtoWishList = (wishlistproduct) => {
    addToWishlist(wishlistproduct)
    setisDisabledwishlist(true)
  }
  return (
    <div className=" mt-24 bg-white items-center h-[450px] absolute w-9/12 -translate-x-1/2 left-1/2 -bottom-[350px] rounded-3xl flex gap-5 p-6">
      <div className="flex-1">
        <img className="w-[230px]" src={product_image} alt="" />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-bold">${product_title}</h1>
        <p className="text-xl font-semibold text-[#09080FCC] mt-3 text-opacity-80">
          Price:${price}
        </p>
        <p className="text-lg my-5 text-[#09080FCC] text-opacity-60">
          ${description}
        </p>
        <ol className="list-decimal list-inside text-justify ">
          <h2 className="text-xl font-semibold text-[#09080FCC] text-opacity-80">
            Specification:
          </h2>
          {Specification &&
            Specification.map((specificdata) => (
              <li className="text-lg  text-[#09080FCC] text-opacity-60">
                {specificdata}
              </li>
            ))}
        </ol>

        <div>
          <h2 className="text-xl font-bold">Ratings:</h2>
          <div className="my-2">
            <i class="fa-solid fa-star text-yellow-400"></i>
            <i class="fa-solid fa-star text-yellow-400"></i>
            <i class="fa-solid fa-star text-yellow-400"></i>
            <i class="fa-solid fa-star text-yellow-400"></i>
            <i class="fa-regular fa-star"></i>
            <span className="ml-2 py-2 px-3 bg-[#09080F0D] bg-opacity-5">
              {rating}
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleAddtoCart(productdetails)}
                disabled={isDisabled}
                className={`rounded-3xl px-4 py-3 text-white font-bold mt-3 flex gap-2 items-center transition-all duration-300 ${
                  isDisabled
                    ? "bg-gray-300 text-gray-400 cursor-not-allowed shadow-none opacity-75"
                    : "bg-[#9538E2] shadow-lg hover:shadow-md"
                }`}
              >
                Add to Cart
              </button>

              <button onClick={() => handleAddtoWishList(productdetails)} disabled={isDisabledwishlist} className={`px-4 py-3 bg-[#09080F0D] bg-opacity-5 rounded-3xl ${ isDisabledwishlist
                    ? "bg-gray-300 text-gray-400 cursor-not-allowed shadow-none opacity-75"
                    : "bg-[#9538E2] border-red-500 shadow-lg hover:shadow-md"}`}>
                <i class="fa-regular fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificDetail;

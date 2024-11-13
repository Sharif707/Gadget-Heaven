import { useState, useEffect } from "react";
import { getCartdata, removeFavorite } from "../utils/localStorage";
import Cart from "../Components/Cart";
import WishList from "../Components/WishList";

const Dashboard = () => {
  const [isshow, setisShow] = useState(true);

  return (
    <>
      <div className="bg-[#9538E2] min-h-[280px]  pt-14">
        <h3 className="text-3xl font-bold text-white leading-normal text-center">
          Dashboard
        </h3>
        <p className="my-4 text-white w-3/5 mx-auto text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="space-x-3 text-center">
          <button
            onClick={() => setisShow(true)}
            className={` ${
              isshow ? " btn btn-accent py-3 px-6" : "btn bg-transparent  border py-3 px-6"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => setisShow(false)}
            className="btn btn-outline btn-accent py-3 px-6"
          >
            WishList
          </button>
        </div>
      </div>
      {isshow ? <Cart></Cart> : <WishList></WishList>}
    </>
  );
};
export default Dashboard;

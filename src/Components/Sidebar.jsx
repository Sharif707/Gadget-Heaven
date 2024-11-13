import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ categories }) => {
  console.log(categories);
  return (
    <>
      <div
        role="tablist"
        className="tabs tabs-boxed flex flex-col w-[200px] gap-6 col-span-1 h-[500px] p-5"
      >
        {categories.map((category) => (
          <NavLink 
            to={`/category/${category.category}`}
            key={category.category}
            role="tab"
            className={({isActive}) =>
              `tab text-lg text-[#09080F99] text-opacity-60 w-full font-semibold bg-white rounded-2xl ${
                isActive ? "tab-active" : ""
              }`
            }
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Sidebar;

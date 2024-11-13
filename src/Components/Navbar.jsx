import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { getCartdata } from "../utils/localStorage";


const Navbar = () => {
  // const [itemnmbr, setitemnmbr] = useState([])
 
  // useEffect(() => {
  //   const item = getCartdata()
  //   let count; count = item.length
  //   setitemnmbr(count)
  // }, [])
  const location = useLocation()
  console.log(location.pathname);
  const isHome = location.pathname === '/';
  console.log(isHome);
    return (
        <div className={isHome ? `navbar rounded-tr-3xl rounded-tl-3xl p-3 bg-[#9538E2] text-white` : 'bg-white navbar rounded-tr-3xl rounded-tl-3xl p-3 text-black'}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink>Statistics</NavLink>
               
              </li>
              <li>
                <NavLink to={'/dashboard'}>Dashboard</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li>
          <NavLink to={'/'}>Home</NavLink>
              </li>
              <li>
              <NavLink to={'/statistics'}>Statistics</NavLink>
              </li>
              <li>
              <NavLink to={'/dashboard'}>Dashboard</NavLink>
              </li>
              <li>
                
               
                <NavLink to={'/products'}>Products</NavLink>
          
       
              </li>
          </ul>
        </div>
        <div className="navbar-end space-x-3">
        <button className="btn btn-ghost btn-circle bg-white">
          <img width="20" height="20" src="https://img.icons8.com/ios/24/shopping-cart--v1.png" alt="shopping-cart--v1"/>
         
          </button>
          <button className="btn btn-ghost btn-circle bg-white">
            <div className="indicator">
            <img width="20" height="20" src="https://img.icons8.com/ios/24/like--v1.png" alt="like--v1"/>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    );
};

export default Navbar;
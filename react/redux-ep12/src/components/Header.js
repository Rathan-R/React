import React from "react";
import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btn, setBtn] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const [handle, setHandle] = useState(false);
  // selector is a hook==>now we are subscribing to our store using a selector
  const cart = useSelector((store) => store.cart.items);
  const handleClick = () => {
    setHandle(!handle);
  };
  return (
    <div>
      <div className="flex justify-between bg-black text-white rounded-md  w-full h-16 sticky  max-sm:w-full">
        <div className=" flex items-center">
          <img className="rounded-3xl h-12 w-12 ml-1" src={LOGO_URL} />
          <h2 className="pl-2 font-bold text-sm text-yellow-500 max-sm:text-md">
            Driving N Dining
          </h2>
        </div>
        <div className="nav-items">
          <ul className="flex justify-center items-center h-full max-md:hidden width-200 bg-black absolute top-0 right-0">
            <li className="flex" data-testid="networkStatus">
              {useOnlineStatus() ? "🟢" : "🔴"}
            </li>
            <li className="px-2">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2">
              <Link to="/about">About us</Link>
            </li>
            <li className="px-2">
              <Link to="/contact">Contact us</Link>
            </li>
            <li className="px-2">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-2 font-bold text-xl">
              <Link to="/cart">cart-({cart.length} items)</Link>
            </li>
            <button
              className="bg-blue-700 px-2 py-1 mr-2 rounded-sm"
              onClick={() => {
                btn === "Login" ? setBtn("Logout") : setBtn("Login");
              }}
            >
              {btn}
            </button>
            <li className="px-2">{loggedInUser}</li>
          </ul>
          <div className="w-full h-full flex items-center justify-center mr-4">
            <svg
              onClick={handleClick}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-white "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
      {handle ? (
        <div className="handle absolute z-10 top-0 right-0 w-56 h-full bg-slate-800 text-white md:hidden">
          <div className="w-full flex justify-end  mt-2 mb-4">
            <svg
              onClick={handleClick}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-white mt-2 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <ul className="flex items-center justify-center flex-col">
            <li className="p-2 ">
              <Link to="/">Home</Link>
            </li>
            <li className="p-2">
              <Link to="/about">About us</Link>
            </li>
            <li className="p-2">
              <Link to="/contact">Contact us</Link>
            </li>
            <li className="p-2">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="p-2 font-bold text-xl">
              <Link to="/cart">cart-({cart.length} items)</Link>
            </li>
            <button
              className="bg-blue-700 p-4 py-1 mr-2 rounded-sm m-2"
              onClick={() => {
                btn === "Login" ? setBtn("Logout") : setBtn("Login");
              }}
            >
              {btn}
            </button>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;

import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btn, setBtn] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="flex justify-between bg-black text-white rounded-md  w-full h-16 sticky p-2  max-sm:w-full">
      <div className=" flex items-center">
        <img className="rounded-3xl h-12 w-12 ml-1" src={LOGO_URL} />
        <h2 className="pl-2 font-bold text-sm text-yellow-500 max-sm:text-md">
          Driving N Dining
        </h2>
      </div>
      <div className="nav-items">
        <ul className="flex justify-center items-center h-full max-sm:hidden width-200 bg-black absolute top-0 right-0">
          <li className="flex">{useOnlineStatus() ? "🟢" : "🔴"}</li>
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
          <li className="px-2">Cart</li>
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
      </div>
    </div>
  );
};

export default Header;

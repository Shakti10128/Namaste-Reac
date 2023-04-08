import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_IMG_URL } from "../Constant";


const Header = () => {
   const[isLoggedIn,setIsLoggedIn] = useState(false);
    return (
      <div className="flex justify-between h-24 bg-white shadow-md">
        <a href="/">
          <img
            className="w-16 m-1 ml-36 mt-4"
            src={LOGO_IMG_URL}
          />
        </a>
        <ul className="flex mr-10">
          <Link to='/search'>
            <li className="mx-7 mt-8 text-xl text-gray-600 hover:text-gray-800">Search</li>
          </Link>
          <Link to='/offer'>
            <li className="mx-7 mt-8 text-xl text-gray-600 hover:text-gray-800">Offers</li>
          </Link>
          <Link to='/help'>
            <li className="mx-7 mt-8 text-xl text-gray-600 hover:text-gray-800">Help</li>
          </Link>
          <Link to='singin'>
            <li className="mx-7 mt-8 text-xl text-gray-600 hover:text-gray-800">Sign In</li>
          </Link>
          <Link to='cart'>
            <li className="mx-7 mt-8 text-xl text-gray-600 hover:text-gray-800">Cart</li>
          </Link>
        </ul>
        {/* {isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)}>log Out</button>:
        <button onClick={()=>setIsLoggedIn(true)}>Log in</button>} */}
      </div>
    );
  };

  export default Header;
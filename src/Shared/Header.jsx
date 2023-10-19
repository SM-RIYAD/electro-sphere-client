import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut, theme, setTheme } = useContext(AuthContext);
  console.log("photo url", user?.photoURL);
  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => console.log(err));
  };

  const navLinks = (
    <>
      <li className={`${user ? "pt-10" : "pt-5"} `}>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className={`${user ? "pt-10" : "pt-5"} `}>
        <NavLink to="/addproduct">Add Product</NavLink>
      </li>
      <li className={`${user ? "pt-10" : "pt-5"} `}>
        <NavLink to="/mycart">My Cart</NavLink>
      </li>

      <li className={`${user ? "pt-10" : "pt-5"} `}>
        {" "}
        {theme === "light" && (
          <p
            onClick={() => {
              setTheme("dark");
              console.log("this is theme ", theme);
            }}
            className="    border-0 "
          >
            {" "}
            Dark
          </p>
        )}
        {theme === "dark" && (
          <p
            onClick={() => {
              setTheme("light");

              console.log("this is theme ", theme);
            }}
            className="  border-0 "
          >
            {" "}
            Light
          </p>
        )}
      </li>
      <li className={`${user ? "pt-10" : "pt-5"} `}>
        {user?.displayName ? (
          <p
            onClick={handleLogout}
            className="  border-0  "
          >
            {" "}
            Logout
          </p>
        ) : (
          <NavLink to={"/login"}>
            <p className=" border-0 ">
              {" "}
              Log in
            </p>{" "}
          </NavLink>
        )}
      </li>
      <li>
        {user && (
          <div className=" lg:ms-10  flex items-center flex-col mt-2 gap-2  ">
            <div className="rounded-full ">
              <div className="w-12  rounded-full ">
                <img className="rounded-full" src={user?.photoURL} />
              </div>
            </div>
            <p className="font-bold">{user.displayName}</p>
          </div>
        )}
      </li>
    </>
  );
  return (
    <div className="   ">
      <div className="navbar  lg:max-w-6xl mx-auto   ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu z-40 menu-sm dropdown-content mt-3  p-2 shadow bg-red-500 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-red-800 font-bold text-xl">
            ElectroSphere
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* <ul className="menu menu-horizontal px-1">{navLinks}</ul> */}
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          {/* {user?.displayName ? (
            <button
              onClick={handleLogout}
              className="btn btn-primary bg-red-400 border-0 text-white"
            >
              {" "}
              Logout
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="btn border-0  bg-red-400 text-white">
                {" "}
                Log in
              </button>{" "}
            </Link>
          )} */}
          {/* {theme === "light" && (
            <button
              onClick={() => {setTheme("dark");
              console.log("this is theme ",theme)
            
            }}
              className="btn btn-primary ms-5  border-0 text-white"
            >
              {" "}
              Dark
            </button>
          )}

          {theme === "dark" && (
            <button
              onClick={() => {setTheme("light")
            
            
            console.log("this is theme ",theme)}}
              className="btn btn-primary ms-5 border-0 text-white"
            >
              {" "}
              Light
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Header;

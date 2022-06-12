import { useState, useContext } from "react";

import "../css/Header.styles.css";

import { ReactComponent as Logo } from "../assets/crown.svg";

import { NavLink, Outlet } from "react-router-dom";

import { signOutUser } from "../firebase";

import { UserContext } from "../contexts/User.Context";

import { CartContext } from "../contexts/Cart.Context";

export default function Header() {
  const [nav, setNav] = useState(false);

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const { handleCartCount } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();

    setCurrentUser(null);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-5 rounded dark:bg-gray-800 drop-shadow-sm">
        <div className="container flex flex-wrap justify-between items-center mx-auto lg:px-6">
          <NavLink to="/" exact={"true"} className="flex items-center">
            <Logo className="px-2 mb-2 mr-2" />
            <span className="self-center text-lg whitespace-nowrap dark:text-white text-gray-700">
              Clothing App
            </span>
          </NavLink>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setNav(!nav)}
          >
            <span className="sr-only">Open main menu</span>
            {!nav ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
          <div
            className={`w-full md:block md:w-auto ${nav ? "" : "hidden"}`}
            id="mobile-menu"
          >
            <ul
              className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
              onClick={() => setNav(!nav)}
            >
              <li>
                <NavLink
                  to="/"
                  exact={"true"}
                  className={({ isActive }) => (isActive ? " bold" : "link")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) => (isActive ? "bold" : "link")}
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cart"
                  className={({ isActive }) => (isActive ? " bold" : "link")}
                >
                  Cart ({handleCartCount})
                </NavLink>
              </li>
              {currentUser ? (
                <li>
                  <button className="link" onClick={signOutHandler}>
                    Sign Out
                  </button>
                </li>
              ) : (
                <li>
                  <NavLink
                    to="/sign-in"
                    className={({ isActive }) => (isActive ? " bold" : "link")}
                  >
                    Sign In
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

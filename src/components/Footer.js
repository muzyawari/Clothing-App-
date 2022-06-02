import React from "react";

import "../css/Header.styles.css";

import { NavLink, Outlet } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="p-4 bg-white  shadow-md	shadow-gray dark:bg-gray-800">
        <div className="sm:flex sm:items-center sm:justify-between md:px-4 lg:px-10 ">
          <a
            href="https://flowbite.com"
            className="flex  justify-center mb-4 sm:mb-0"
          >
            <span className=" text-xl font-semibold whitespace-nowrap dark:text-white pb-3">
              Clothing App
            </span>
          </a>
          <ul className="flex flex-wrap justify-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400 ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "mx-4 text-black font-medium"
                    : "mx-4 hover:underline md:mr-6"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="shop"
                className={({ isActive }) =>
                  isActive
                    ? "mx-4 text-black font-medium"
                    : "mx-4 hover:underline "
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="sign-in"
                className={({ isActive }) =>
                  isActive
                    ? "mx-4 text-black font-medium"
                    : "mx-4 hover:underline "
                }
              >
                Sign In
              </NavLink>
            </li>
          </ul>
        </div>
        <span className="block text-sm text-gray-500 sm:hidden md:hidden flex justify-center dark:text-gray-400">
          © 2022 Clothing App™
        </span>
      </footer>
      <Outlet />
    </>
  );
}

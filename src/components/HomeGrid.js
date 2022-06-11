import "../css/Home.styles.css";

import { Outlet, Link } from "react-router-dom";

export default function HomeGrid() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:pl-6 pl-3  w-full">
        <div className="relative group flex justify-center items-center h-full w-full">
          <img
            className="home__image"
            src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png"
            alt=""
          />
          <Link className="home__button" to="/mens">
            Mens
          </Link>
        </div>

        <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
          <div className="relative group flex justify-center items-center h-full w-full">
            <img
              className="home__image"
              src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png"
              alt="mens"
            />
            <Link className="home__button" to="/womens">
              Womens
            </Link>
            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
          </div>
          <div className="relative group flex justify-center items-center h-full w-full">
            <img
              className="home__image"
              src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png"
              alt=""
            />
            <Link className="home__button" to="/sneakers">
              Sneakers
            </Link>
            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
          </div>
        </div>

        <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
          <img
            className="home__image"
            src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
            alt=""
          />
          <Link className="home__button" to="/jackets">
            Jackets
          </Link>
          <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
        </div>

        <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
          <img
            className="object-center object-cover h-full w-full hidden md:block"
            src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png"
            alt=""
          />
          <img
            className="object-center object-cover h-full w-full md:hidden"
            src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
            alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
          />
          <Link className="home__button" to="/jackets">
            Jackets
          </Link>{" "}
          <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
        </div>
      </div>
      <div className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 md:pl-6 lg:hidden">
        <img
          className="object-center object-cover h-full w-full hidden md:block"
          src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png"
          alt=""
        />
        <img
          className="object-center object-cover h-full w-full sm:hidden"
          src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
          alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
        />
        <Link className="home__button" to="/jackets">
          Jackets
        </Link>{" "}
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
      </div>
      <Outlet />
    </>
  );
}

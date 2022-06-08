import { Routes, Route } from "react-router-dom";

import HomeGrid from "../../components/HomeGrid";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="2xl:mx-auto 2xl:container py-12 sm:px-6 xl:px-20 2xl:px-0 w-full px-6">
        <div className="flex flex-col jusitfy-center items-center space-y-10">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-2xl xl:text-3xl leading-7 xl:leading-9 text-gray-700 dark:text-white">
              Start Shopping
            </h1>
          </div>
          <HomeGrid />
        </div>
      </div>
    </div>
  );
}

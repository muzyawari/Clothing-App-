import { useState, useEffect, useContext } from "react";

import { ProductContext } from "../../contexts/Products.Context";

export default function ProductCards({ title, category }) {
  // console.log(products);

  // console.log(id);

  // useEffect(() => {
  //   setCategories(products[category]);
  // }, [category, products]);
  // category.map((product) => {
  //   console.log(product);
  // });

  return (
    <>
      {category.map((product) => (
        <div className=" md:w-1/3 p-12">
          <div className="bg-white shadow-lg hover:shadow-xl rounded-lg ">
            <img className="object-fill		" src={product.imageUrl}></img>
            <div className="flex justify-between items-start px-2 pt-2">
              <div className="p-2 flex-grow">
                <h1 className="font-medium text-xl">{product.name}</h1>
              </div>
              <div className="p-2 text-right">
                <div className="text-teal-500 font-semibold text-lg">
                  ${product.price}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center px-2 pb-2">
              <div className="w-full p-2">
                <button className="block w-full bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

import { useState, useEffect, useContext } from "react";

import { useParams } from "react-router-dom";

import { ProductContext } from "../../contexts/Products.Context";

import Loader from "../../components/Loader";

import ProductCard from "../products/ProductCard";

export default function Category() {
  const { id } = useParams();
  const { products, isLoading } = useContext(ProductContext);

  const [categories, setCategories] = useState(products[id]);

  useEffect(() => {
    setCategories(products[id]);
  }, [id, products]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-2xl xl:text-3xl leading-7 xl:leading-9 text-gray-700 dark:text-white mt-12">
          {id.toUpperCase()}
        </h1>
      </div>
      <div className="flex flex-col w-screen min-h-screen p-10  text-gray-800 ">
        <div className="grid sm:grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
          {categories &&
            categories.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
}

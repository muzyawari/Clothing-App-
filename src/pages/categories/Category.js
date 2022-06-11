import { useState, useEffect, useContext } from "react";

import { useParams } from "react-router-dom";

import { ProductContext } from "../../contexts/Products.Context";

import ProductCard from "../products/ProductCard";

export default function Category() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const [categories, setCategories] = useState(products[id]);

  useEffect(() => {
    setCategories(products[id]);
  }, [id, products]);

  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-2xl xl:text-3xl leading-7 xl:leading-9 text-gray-700 dark:text-white mt-8">
          {id.toUpperCase()}
        </h1>
      </div>
      <div className="flex flex-wrap justify-center ">
        {categories &&
          categories.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}

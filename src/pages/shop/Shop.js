import { useContext } from "react";

import { ProductContext } from "../../contexts/Products.Context";

import { getProductData } from "../../firebase";

import { useParams } from "react-router-dom";

import ProductCards from "../products/ProductCards";

export default function Shop() {
  const { products } = useContext(ProductContext);

  let { id } = useParams();

  console.log(Object.keys(products));

  console.log(id);

  if (products) {
    return (
      <div className="pb-10 pt-6">
        {id.toUpperCase()}
        {Object.keys(products).map((title) => {
          const category = products[id];
          console.log(category);
          return <ProductCards key={title} title={title} category={category} />;
        })}
      </div>
    );
  }
}

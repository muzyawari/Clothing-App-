import { useContext } from "react";

import { ProductContext } from "../../contexts/Products.Context";

import { getProductData } from "../../firebase";

export default function Mens() {
  const { products } = useContext(ProductContext);

  return <div className="h-screen"></div>;
}

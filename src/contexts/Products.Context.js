import { useState, useEffect, createContext } from "react";

import { getProductData } from "../firebase";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getProductData();
      setProducts(categoryMap);
    };

    getCategoriesMap();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductProvider };

import { useState, useEffect, createContext } from "react";

import { getProductData, addCollectionAndDocuments } from "../firebase";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import SHOP_DATA from "../shop-data.js";
const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getProductData();
      setProducts(categoryMap);
    };
    getCategoriesMap();
    setIsLoading(false);
  }, []);

  const value = { products, isLoading };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export { ProductContext, ProductProvider };

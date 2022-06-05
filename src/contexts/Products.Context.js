import { useState, createContext } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState();
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductProvider };

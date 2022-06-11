import { useState, createContext } from "react";

const CartContext = createContext();

function CartProvider() {
  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };

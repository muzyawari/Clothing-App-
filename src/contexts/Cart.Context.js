import { useState, createContext } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(0);

  const [item, setItem] = useState();

  const value = { cart, setCart, item, setItem };

  console.log(item);

  console.log(cart);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };

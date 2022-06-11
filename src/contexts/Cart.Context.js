import { useState, createContext } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(0);

  const [item, setItem] = useState([]);

  const handleItemAction = (itemToAdd) => {
    const existingProduct = item.find((product) => product.id === itemToAdd.id);

    if (existingProduct) {
      // increase quantity
      const updatedCart = item.map((product) => {
        if (product.id === itemToAdd.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      setItem(updatedCart);
    } else {
      console.log("a");
      // product is new to the cart
      setItem([
        ...item,
        {
          ...itemToAdd,
          quantity: 1,
        },
      ]);
    }
  };

  const handleCartAction = () => {
    setCart((prevCart) => prevCart + 1);
  };

  const value = {
    cart,
    setCart,
    item,
    setItem,
    handleItemAction,
    handleCartAction,
  };

  console.log(cart);

  console.log(item);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };

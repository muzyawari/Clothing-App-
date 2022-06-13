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

  const handleProductDelete = (id) => {
    const updatedCart = item.filter((product) => product.id !== id);
    setItem(updatedCart);
  };

  const handleCartCount = item.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const handleReduceQuantity = (itemToAdd) => {
    const existingProduct = item.find((product) => product.id === itemToAdd.id);

    const updatedCart = item.map((product) => {
      if (product.id === itemToAdd.id) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }
      return product;
    });

    setItem(updatedCart);

    const updatedItem = updatedCart.map((product) => {
      if (product.quantity === 0) {
        handleProductDelete(product.id);
      }
    });
  };

  const value = {
    cart,
    item,
    handleItemAction,
    handleCartCount,
    handleProductDelete,
    handleReduceQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };

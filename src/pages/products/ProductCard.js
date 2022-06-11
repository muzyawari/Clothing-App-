import { useContext } from "react";

import { CartContext } from "../../contexts/Cart.Context";

export default function ProductCard({ product }) {
  const { cart, setCart, setItem } = useContext(CartContext);

  const handleCartAction = () => {
    setCart((prevCart) => prevCart + 1);
  };

  const handleItemAction = (itemToAdd) => {
    setItem([
      {
        ...itemToAdd,
        quantity: 1,
      },
    ]);
  };

  return (
    <div className=" md:w-1/3 py-10 ">
      <div className="bg-white shadow-lg hover:shadow-xl rounded-lg w-80">
        <img className="object-fill w-full" src={product.imageUrl}></img>
        <div className="flex justify-between items-start px-2 pt-2">
          <div className="p-2 flex-grow">
            <h1 className="font-medium text-xl text-gray-700">
              {product.name}
            </h1>
          </div>
          <div className="p-2 text-right">
            <div className="text-gray-700 font-semibold text-lg">
              ${product.price}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-2 pb-2">
          <div className="w-full p-2">
            <button
              onClick={() => {
                handleCartAction();
                handleItemAction(product);
              }}
              className="block w-full bg-gray-600  text-white border-2 px-3 py-2 rounded uppercase font-poppins font-medium"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

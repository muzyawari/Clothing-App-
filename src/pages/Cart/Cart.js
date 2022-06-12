import { useContext } from "react";

import { CartContext } from "../../contexts/Cart.Context";

export default function Cart() {
  const {
    cart,
    item,
    handleItemAction,
    handleProductDelete,
    handleReduceQuantity,
  } = useContext(CartContext);

  const cartCount = item.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-2xl xl:text-3xl leading-7 xl:leading-9 text-gray-700">
          Your cart
        </h2>
        {item.map((product) => (
          <ul
            className="flex flex-col divide-y divide-gray-700"
            key={product.id}
          >
            <li className="flex flex-col py-2 sm:flex-row sm:justify-between">
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                  src={product.imageUrl}
                  alt="Polaroid camera"
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg text-gray-900 leading-snug sm:pr-8">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Quantity: {product.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg  text-gray-800">
                        ${product.price * product.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x text-red-400">
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 pl-0 space-x-1 mr-2"
                      onClick={() => {
                        handleProductDelete(product.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                      </svg>
                      <span>Remove</span>
                    </button>
                    <button
                      className="mt-1 mr-2 border-slate-100 border-solid  border-2 text-gray-500"
                      onClick={() => {
                        handleReduceQuantity(product);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 	"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        />
                      </svg>
                    </button>
                    <button
                      className="mt-1 border-slate-100 border-solid  border-2 text-gray-500"
                      onClick={() => {
                        handleItemAction(product);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        ))}
        <div className="mt-16">
          <div className="space-y-1 text-right text-gray-800 mb-8 shadow-black	">
            <p>
              Total amount:
              <span className="text-gray-800"> ${cartCount}</span>
            </p>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 border rounded-md  bg-gray-200 dark:border-violet-400"
            >
              Back
              <span className="sr-only sm:not-sr-only"> To Shop</span>
            </button>
            <button
              type="button"
              className="px-6 py-2 border rounded-md bg-indigo-200 text-indigo-600 dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400 shadow-black"
            >
              <span className="sr-only sm:not-sr-only">Continue To </span>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

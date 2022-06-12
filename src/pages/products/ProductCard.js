import { useState, useContext } from "react";

import { CartContext } from "../../contexts/Cart.Context";

import "../../css/Home.styles.css";

export default function ProductCard({ product }) {
  const [effect, setEffect] = useState(false);

  const { item, handleItemAction } = useContext(CartContext);

  return (
    <>
      <div className=" ">
        <div>
          <div className="relative">
            <img
              className="block rounded-lg shadow-lg w-full object-cover h-128	"
              src={product.imageUrl}
            ></img>
            <button
              onClick={() => {
                handleItemAction(product);
                setEffect(true);
              }}
              onAnimationEnd={() => setEffect(false)}
              className={`${
                effect && "animate-wiggle"
              } opacity-0 hover:opacity-100 duration-300 pointer-events-auto absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold`}
            >
              Add To Cart
            </button>
            {item.map((stateItem) => {
              if (stateItem.id == product.id) {
                return (
                  <span
                    key={stateItem.id}
                    className="absolute  right-[-10px] top-[-10px] rounded-full bg-red-400 w-6 h-6 top right p-1 m-0 text-white font-mono text-sm  leading-tight text-center"
                  >
                    {stateItem.quantity}
                  </span>
                );
              }
            })}
          </div>

          <div className="flex items-center justify-between mt-3">
            <div>
              <h2 className="font-medium">{product.name}</h2>
            </div>

            <span className="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">
              ${product.price}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

{
}

{
  /* <div classNameName=" md:w-1/3 py-10 ">
<div classNameName="bg-white shadow-lg hover:shadow-xl rounded-lg w-80">
	<img classNameName="object-fill w-full" src={product.imageUrl}></img>
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
</div> */
}

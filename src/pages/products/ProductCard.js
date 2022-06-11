import { useContext } from "react";

import { CartContext } from "../../contexts/Cart.Context";

export default function ProductCard({ product }) {
  const { handleItemAction, handleCartAction } = useContext(CartContext);

  return (
    <>
      <div class=" ">
        <div>
          {/* <a href="#" class="block h-64 rounded-lg shadow-lg bg-white"></a> */}
          <img
            className="block  rounded-lg shadow-lg w-full object-cover h-128	"
            src={product.imageUrl}
          ></img>

          <div class="flex items-center justify-between mt-3">
            <div>
              <h2 class="font-medium">{product.name}</h2>
            </div>
            <span class="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">
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
  /* <div className=" md:w-1/3 py-10 ">
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
</div> */
}

import { useState } from "react";
import { FaHeart, FaEye, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleAddToCart = () => setQuantity(1);
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  return (<div
  className="relative flex flex-col items-center border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300 bg-white p-1"
  onMouseEnter={(e) => {
    if (!e.target.closest(".no-hover-drawer")) setHovered(true);
  }}
  onMouseLeave={() => setHovered(false)}
>
    
      {/* Image & Hover Drawer Container */}
      <div className="relative w-full h-36 overflow-hidden">
        {/* Hover Drawer (Overlapping the image) */}
        <div
          className={`absolute top-0 right-0 h-full w-1/3 transition-transform duration-300 ${
            hovered ? "translate-x-0" : "translate-x-full"
          } z-20 flex flex-col items-center justify-center space-y-2 p-2`}
        >
          <button className="p-3 rounded-full bg-gray-200 hover:bg-white shadow-2xl transition">
            <FaHeart className="text-red-600 text-xl" />
          </button>
          <button className="p-3 rounded-full bg-gray-200 hover:bg-white shadow-2xl transition">
            <FaEye className="text-blue-600 text-xl" />
          </button>
          <button className="p-3 rounded-full bg-gray-200 hover:bg-white shadow-2xl transition">
            <FaShoppingCart className="text-green-700 text-xl" />
          </button>
        </div>

        {/* Product Image (Blur on Hover) */}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition duration-300 ${
            hovered ? "blur-md" : ""
          }`}
        />
      </div>

      {/* Product Info */}
      <div className="w-full mt-4 flex flex-col items-center">
        <h3 className="text-lg font-semibold">{product.name.slice(0,10)}</h3>
        <p className="text-gray-500">${product.price}</p>
      </div>

      {/* Add to Cart Button / Quantity Control */}
      <div className="mt-4 w-full">
        {quantity === 0 ? (<button
  onClick={handleAddToCart}
  className="no-hover-drawer w-full py-2 bg-teal-500 text-white rounded-lg font-semibold transition hover:bg-blue-700"
>
  Add to Cart
</button>
          
        ) : (
          <div className="flex items-center justify-between w-full border border-gray-300 rounded-lg">
            <button
              onClick={decrementQuantity}
              className="w-10 h-10 text-lg font-bold bg-gray-200 hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="w-10 h-10 text-lg font-bold bg-gray-200 hover:bg-gray-300"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
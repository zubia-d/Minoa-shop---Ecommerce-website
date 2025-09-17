import ProductListing from "./api/ProductListing.json";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Products() {
  const products = ProductListing.products;
  const { addToCart } = useCart();
  const [clickedIds, setClickedIds] = useState([]);
  const handleAddToCart = (product) => {
    addToCart(product);
    if (!clickedIds.includes(product.id)) {
      setClickedIds([...clickedIds, product.id]);
    }
  };

  return (
    <div className="pt-20">
      <h1 className="font-bold text-3xl text-center mb-10">Featured Products</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-2 m-auto lg:w-250">
        {products.map((p) => (
          <div key={p.id} className="bg-red-100 rounded-lg p-4 shadow-2xl">
            <img
              src={p.image}
              alt={p.name}
              className="h-40 w-full object-cover rounded"
            />
            <h3 className="text-lg font-bold text-black">{p.name}</h3>
            <p className="text-black">{p.description}</p>
            <p className="text-pink-600 font-semibold">Rs {p.price}</p>

            {/* ✅ Button text depends on whether this product.id is in clickedIds */}
            <button
              onClick={() => handleAddToCart(p)}
              className="hover:scale-105 transition-transform duration-300 w-auto p-1 px-3 mt-3 rounded border-1 border-pink-600 bg-rose-300"
            >
              {clickedIds.includes(p.id) ? "Added " : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

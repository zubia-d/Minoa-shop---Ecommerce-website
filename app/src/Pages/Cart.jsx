import { useCart } from "../context/CartContext";
import { NavLink } from "react-router-dom"; 

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-6 mt-20 flex flex-col m-auto lg:w-200">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-red-200 p-3 rounded"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>
                  Rs {item.price} × {item.qty} ={" "}
                  <span className="font-bold">
                    Rs {item.price * item.qty}
                  </span>
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-pink-300 text-white px-3 py-1 rounded hover:bg-pink-600 transition-colors "
              >
                Remove 
              </button>
            </div>
          ))}

          <h3 className="text-xl font-bold mt-4">
            Total:
            Rs {cart.reduce((acc, item) => acc + item.price * item.qty, 0)}
          </h3>
          <div className="flex justify-center">
            <NavLink to="/CheckOut" className="text-1xl font-bold bg-pink-400 flex justify-center  text-white px-3 py-2 w-60 rounded hover:bg-pink-600 transition-colors ">Checkout</NavLink> 
            </div>

          
        </div>
      )}
    </div>
  );
}

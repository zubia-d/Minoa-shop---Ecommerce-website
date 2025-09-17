import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Checkout() {
  const { cart, setCart } = useCart(); // access global cart
  const [form, setForm] = useState({
    name: "",
    contact: "",
    address: "",
    payment: "COD",
  });

  // calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("❌ Your cart is empty!");
      return;
    }

    // 👉 Simulate order confirmation
    alert(
      `✅ Thank you ${form.name}!\nYour order of Rs ${total} has been placed.\nPayment: ${form.payment}`
    );

    // 👉 Clear the cart (since no backend is saving it)
    setCart([]);

    // 👉 Reset form
    setForm({ name: "", address: "", payment: "COD" });
  };

  return (
    <div className="p-12">
    <div className="p-7 mt-20 max-w-xl mx-auto bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {/* Show Cart Summary */}
      <div className="mb-4">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <p key={item.id}>
              {item.name} × {item.qty} = Rs {item.price * item.qty}
            </p>
          ))
        )}
        <h2 className="font-bold mt-2">Total: Rs {total}</h2>
      </div>

      {/* Checkout Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full  p-2 rounded bg-pink-100"
          required
        />
        <input
          type="text"
          placeholder="Your Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          className="w-full text-black p-2 rounded bg-pink-100"
          required
        />
        <input
          type="text"
          placeholder="Your Contact"
          value={form.contact}
          onChange={(e) => setForm({ ...form, contact: e.target.value })}
          className="w-full text-black p-2 rounded bg-pink-100"
          required
        />

        <select
          value={form.payment}
          onChange={(e) => setForm({ ...form, payment: e.target.value })}
          className="w-full p-2 text-black rounded bg-pink-100"
        >
          <option value="COD">Cash on Delivery</option>
          <option value="Card">Credit/Debit Card - Not Available</option>
          <option value="Paypal">JazzCash - Not Available</option>
        </select>

        <button
          type="submit"
          className="w-full bg-pink-400 text-white py-2 rounded hover:bg-green-700"
        >
          Place Order
        </button>
      </form>
    </div>
    </div>
  );
}
    
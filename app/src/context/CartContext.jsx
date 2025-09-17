import { createContext, useContext, useState } from "react"; // tools of react

// const CartContext = createContext(); // create a shared box

// export function CartProvider({ children }) { // childern -> all pages 
//   const [cart, setCart] = useState([]); // cart -> all items

//   const addToCart = (product) => { 
//     const exists = cart.find((item) => item.id === product.id); // exists is the var and item is each object of product array and it stores the object whose id is same as product id
//     if (exists) {
//       setCart(
//         cart.map((item) => // map -> loop which goes through each item of cart array
//           item.id === product.id ? { ...item, qty: item.qty + 1 } : item // ... is spread operator (it copies all the properties of item object)
//         )
//       );
//     } else {
//       setCart([...cart, { ...product, qty: 1 }]); // ... it copies all the properties of product object , { ...product, qty: 1 } → make a new object with all product details + add a new property qty:1.
//   };

//   const removeFromCart = (id) => {
//     setCart(cart.filter((item) => item.id !== id)); // filter -> loop which goes through each item of cart array and returns a new array with items whose id is not equal to the id passed in the function
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}> {/* value -> all the things we want to share */}
//       {children} {/* all pages */}
//     </CartContext.Provider>
//   );
// }
// }

// export const useCart = () => useContext(CartContext); // custom hook to use the CartContext in any component

// // Without ..., we would either overwrite old data or lose some properties.

const CartContext = createContext(); 
export function CartProvider({ children }) { 
  const [cart, setCart] = useState([]); 

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(  
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    }
    else {
      setCart([...cart, { ...product, qty: 1 }]);
    } 
  };
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id)); 
  }
 
 

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
export const useCart = () => useContext(CartContext);
        
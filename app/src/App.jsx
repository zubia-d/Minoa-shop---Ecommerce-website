import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";
import Headers from "./components/Headers";
import Footers from "./components/Footer"
import Checkout from "./Pages/CheckOut";

function App() {
  return (
    <Router >
     <Headers />
     <div className="min-h-[calc(100vh-136px)] bg-pink-100">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
       </div>
       <div><Footers /></div>
      
    
    </Router>
  );
}

export default App;

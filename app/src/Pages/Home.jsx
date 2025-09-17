import HeroSection from "../components/HeroSection";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Slideshow from "../components/Slideshow";

export const Home = () => {
  return (
    <section className="min-h-screen bg-pink-100 p-10">
      <Slideshow/>
      <HeroSection/> 
      <Products/> 
      <About/>
      <Contact/> 
    </section>
  )
}
export default Home;
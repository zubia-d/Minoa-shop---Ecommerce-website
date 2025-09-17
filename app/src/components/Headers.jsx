import  { NavLink }  from "react-router-dom"
import { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";

export default Headers = () => {
     const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10 sm[350]:ml-0">
            <nav className="container  flex items-center justify-between p-4">
                <div className="text-2xl font-bold text-red-300  "> 
                    <h1 className=" logo font-delius-unicase ">Minoa Shop.</h1>
                </div>
                
        
                <ul className={` ${isOpen ? "block" : "hidden"} lg:flex space-x-8 text-gray-900 mx-24 py-2 mt-3 font-semibold md:mt-3 rounded-2xl`}> 
                    <li className="cursor hover:text-pink-300 font-bold"><NavLink to="/">Home</NavLink></li>
                    <li className="cursor hover:text-pink-300 font-bold"><NavLink to="./Products">Products</NavLink></li>
                    <li className="cursor hover:text-pink-300 font-bold"><NavLink to="./Cart">Cart</NavLink></li>
                    <li className="cursor hover:text-pink-300 font-bold"><NavLink to="./Contact">Contact</NavLink></li>                </ul>
                <div className="md:hidden absolute right-10 top-6 transition-all duration-300">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <RiCloseLine size={30} />
                        ) : (
                            <RiMenu2Line size={30} />
                        )}     
                    </button>

                </div>  
            </nav>
        </header>
    )
}
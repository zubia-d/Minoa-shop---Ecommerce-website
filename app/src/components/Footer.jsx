import { CiLinkedin } from "react-icons/ci"
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
 <div>
      <div className="bg-rose-200">
          <div className="flex p-3 gap-2 justify-center">
            <a href="https://www.instagram.com/zubiaaaaa_a/" target="blank">
            
           <CiInstagram size={24} /> 
            </a>
            <p>shop_minoa</p>
          </div>    
      </div>
      <h3 className="text-center bg-rose-400 text-white">
        All rights reserved @zubia-ghulamullah{" "}
      </h3>
    </div>
  );
};
export default Footer;

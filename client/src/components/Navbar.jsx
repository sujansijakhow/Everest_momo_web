import { Link, useLocation } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTiktokFill } from "react-icons/ri";
import { SlSocialInstagram } from "react-icons/sl";
import Button from "./common/Button";
import Logo from "../images/Logo.png";

function Navbar() {
    const location = useLocation();

    // Function to determine if a link is active
    const isActive = (path) => location.pathname === path;

    return (
        <div className="bg-white border-b w-full h-16 flex items-center justify-evenly fixed top-0 left-0 z-50">
            <div className="flex">
                <Link to="/"><img src={Logo} alt="" width={85} /></Link>
                <ul className="flex ml-12 space-x-8 text-sm text-gray-700">
                    <li>
                        <Link to="/aboutus" className={isActive("/aboutus") ? "text-color-secondary" : ""}>
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link to="/menu" className={isActive("/menu") ? "text-color-secondary" : ""}>
                            Our Menu
                        </Link>
                    </li>
                    <li>
                        <Link to="/service" className={isActive("/service") ? "text-color-secondary" : ""}>
                            Our Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/allergy" className={isActive("/allergy") ? "text-color-secondary" : ""}>
                            Allergy Advice
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex items-center space-x-6">
                <div className="flex space-x-5">
                    <TiSocialFacebook style={{ height: "20px", width: "20px", backgroundColor: "#A6AEBB", color: "white", borderRadius: "50%" }} />
                    <RiTiktokFill style={{ height: "20px", width: "20px", backgroundColor: "#A6AEBB", color: "white", borderRadius: "50%" }} />
                    <SlSocialInstagram style={{ height: "20px", width: "20px", backgroundColor: "#A6AEBB", color: "white", borderRadius: "50%" }} />
                </div>
                
                <Link to="/contact"><Button label={"Contact Us"} color={"color-primary"} /></Link>
            </div>
        </div>
    );
}

export default Navbar;

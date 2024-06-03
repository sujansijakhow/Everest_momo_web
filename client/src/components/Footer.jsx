import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTiktokFill } from "react-icons/ri";
import { SlSocialInstagram } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import Logo from "../images/Logo.png"

function Footer() {


    return(
        <div className="px-20 py-10 flex flex-col bg-gray-50">
            <div className="flex justify-between w-full">
                <div className="flex flex-col gap-3 w-1/4">
                    <img src={Logo} alt="" width={100}/>
                    <span className="text-gray-400 text-[14px]">Lorem ipsum dolor sit amet consectetur. Elit sem tempor egestas molestie. Volutpat quis egestas porttitor turpis sit in. Lorem nunc nullam morbi urna amet suspendisse nullam ac vivamus.</span>
                </div>

                <div className="flex flex-col gap-3 items-center">

                    <div className="text-color-secondary font-bold text-[19px]">
                        <span>momos</span>
                    </div>

                    <div className="text-gray-800 flex flex-col gap-1">
                        <Link to="/aboutus">About us</Link>
                        <Link to="/menu">Our Menu</Link>
                        <Link to="/service">Our Service</Link>
                        <Link to="/contact">Contact us</Link>
                    </div>
                </div>

                <div className="flex flex-col gap-3 items-center">

                    <div className="text-color-secondary font-bold text-[19px]">
                        <span>Legals</span>
                    </div>

                    <div className="text-gray-800 flex flex-col gap-1">
                        <span>Terms & Conditions</span>
                        <span>Privacy Policy</span>
                        <span>Support</span>
                    </div>
                </div>

                <div className="flex flex-col gap-3 items-center">

                    <div className="text-color-secondary font-bold text-[19px]">
                        <span>Follow us</span>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex gap-3  ">
                            <TiSocialFacebook  className="w-7 h-7 text-white bg-gray-500 rounded-full"/>
                            <SlSocialInstagram className="w-7 h-7 text-white bg-gray-500 rounded-full"/>
                            <RiTiktokFill className="w-7 h-7 text-white bg-gray-500 rounded-full" />
                            

                        </div>
                        <div className="flex gap-3  ">
                            <FaLinkedinIn className="w-7 h-7 text-white bg-gray-500 rounded-full"/>
                            <FaYoutube className="w-7 h-7 text-white bg-gray-500 rounded-full"/>
                            <FaTwitter className="w-7 h-7 text-white bg-gray-500 rounded-full" />
                            

                        </div>
                    </div>
                </div>

            </div>

            <div className="border b-1 flex  w-[80%] ml-28 mt-11 border-gray-200">

            </div>

            <div className="flex justify-center text-gray-400 mt-6">
                Copyright &copy;2023 Everest Momo Pvt Ltd. All Rights Reserved
            </div>
        </div>  
    );
}

export default Footer;
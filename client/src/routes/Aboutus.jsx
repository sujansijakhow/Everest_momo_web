import { FaArrowRightLong } from "react-icons/fa6";

import Input from "../components/common/Input";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../images/about.png"
import Whitedot from "../images/whitedot.png"
import Blackdot from "../images/blackdot.png"
import Video from "../images/aboutvideo.png"
import Recipe from "../images/Recipe.png"
import Recipe1 from "../images/Recipe1.png"
import Recipe2 from "../images/Recipe2.png"
import Momo from "../images/Momo.png"
import Photo from "../images/Photo.png"
import Momo1 from "../images/Momo1.png"
import Quote from "../images/Quote.png"
import Head from "../images/Head.png"
import Assistant from "../images/Assistant.png"
import Assistant1 from "../images/Assistant1.png"

function Aboutus() {

    return (
        <div>
            <Navbar />

            <div className="mt-48 flex justify-evenly">

                <div className="flex flex-col gap-6">
                    <span className="text-color-secondary text-[32px]">About Us</span>
                    <span className="text-gray-500">WE PRIDE OURSELF ON</span>
                    <div className="flex flex-col text-[24px] font-bold">
                        <span className="text-color-primary">Our authentic momo recipes</span>
                        <span>passed down through</span>
                        <span>generation</span>

                    </div>

                </div>
                <div className="relative">
                    <div className="relative w-52 h-52 rounded-full bg-color-secondary z-10">

                        <img src={About} alt="Food" className="absolute w-80 h-72 -translate-y-24 z-5" />
                        <img src={Blackdot} alt="Food" className="absolute z-0 transform -translate-y- w-20" />

                    </div>
                </div>


            </div>
            <div className="mt-12 w-full">
                <img src={Video} alt="" className="w-full" />
            </div>

            <div className="p-32 flex flex-col gap-10">
                <div className="flex justify-evenly">
                    <div className="flex flex-col w-[300px]">
                        <div className="font-bold text-[24px] space-x-2">

                            <span>Our momos are</span>
                            <span className="text-color-primary">made with love</span>
                        </div>
                        <div>
                            <span className="text-gray-500 text-[14px]"> Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.</span>
                        </div>
                    </div>
                    <div>
                        <img src={Recipe} alt="" className="w-96" />
                        <img src={Momo} alt="" className="-translate-x-20 -translate-y-20 w-40" />

                    </div>

                </div>
                <div className="flex justify-evenly flex-row-reverse">
                    <div className="flex flex-col w-[329px]">
                        <div className="font-bold text-[24px] space-x-2">

                            <span>Taste the difference with</span>
                            <span className="text-color-primary">Our handcrafted momos</span>
                        </div>
                        <div>
                            <span className="text-gray-500 text-[14px]"> Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.</span>
                        </div>
                    </div>
                    <div>
                        <img src={Recipe1} alt="" className="w-96" />
                        <img src={Photo} alt="" className="translate-x-72 -translate-y-20 w-40" />

                    </div>

                </div>
                <div className="flex justify-evenly">
                    <div className="flex flex-col w-[300px]">
                        <div className="font-bold text-[24px] space-x-2">

                            <span>Our momos are the Perfect</span>
                            <span className="text-color-primary">blend with tradtition</span>

                            <span>and</span>
                            <span className="text-color-primary">innovation</span>
                        </div>
                        <div>
                            <span className="text-gray-500 text-[14px]"> Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.</span>
                        </div>
                    </div>
                    <div>
                        <img src={Recipe2} alt="" className="w-96" />
                        <img src={Momo1} alt="" className="-translate-x-20 -translate-y-20 w-40" />

                    </div>

                </div>


            </div>

            <div>
                <img src={Quote} alt="" />
            </div>

            <div className="flex flex-col gap-5 mt-9">
                <div className="flex flex-col gap-0 items-center">

                    <div className="flex space-x-2 font-bold text-[28px]">
                        <span>Meet the </span>
                        <span className="text-color-primary">Team</span>
                    </div>
                    <span className="text-color-secondary text-[14px] font-bold ">Our talented member who delievers only the best result</span>
                </div>

                <div className="flex justify-center gap-2">
                    <img src={Head} alt="" />
                    <img src={Assistant} alt="" />
                    <img src={Assistant1} alt="" />
                </div>

                <div className="flex items-center justify-between px-20">
                    <div className="flex flex-1 space-x-1">
                        <span>01</span>
                        <span className="text-gray-500">/</span>
                        <span className="text-gray-500">05</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="border b-5 rounded-full p-2">
                            <FaArrowRightLong className="transform rotate-180" />
                        </div>
                        <div className="border b-2 rounded-full p-2">
                            <FaArrowRightLong className="" />
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    );

}

export default Aboutus;
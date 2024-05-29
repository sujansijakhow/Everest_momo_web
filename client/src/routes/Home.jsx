import { FaArrowRightLong } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTiktokFill } from "react-icons/ri";
import { useState } from "react";
import { SlSocialInstagram } from "react-icons/sl";

import Navbar from "../components/Navbar";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Map from "../components/common/Map";

import Food from "../images/food.png"
import BlackDot from "../images/blackdot.png"
import WhiteDot from "../images/whitedot.png"
import Men from "../images/men.png"
import Menu1 from "../images/Menu.png"
import Menu2 from "../images/Menu1.png"
import Menu3 from "../images/Menu2.png"
import VideoImage from "../images/Video.png"
import Quality from "../images/Quality.png"
import Chef from "../images/Chef.png"
import Party from "../images/party.png"
import Testimonal from "../images/testimonal.png"
import Footer from "../components/Footer";

function Home() {
    const initialPosition = { lat: 27.6915, lng: 85.342 };
    const [currentMarkerPosition, setCurrentMarkerPosition] = useState(initialPosition);


    return (
        <div>
            <Navbar />
            <div className="flex justify-evenly gap-5 mt-20">
                <div className="mt-20">
                    <span className="text-gray-500 text-[14px]">
                        RESTAURANT
                    </span>
                    <div className="flex gap-3 items-center">
                        <span className="font-bold text-[40px]">
                            The
                        </span>
                        <span className="bg-color-primary text-[30px] rounded-lg text-white font-bold">
                            #One
                        </span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <span className="font-bold text-[40px]">
                            Momo
                        </span>
                        <span className="text-color-primary text-[45px] font-bold">
                            Restaurnat
                        </span>
                    </div>
                    <div className="flex font-bold space-x-1 mb-4">
                        <span>More than</span>
                        <span className="text-color-primary">20+ Varaities</span>
                        <span>of momo available for you</span>
                    </div>
                    <Button label={"Explore Food menu"} icon={<FaArrowRightLong />} color={"color-secondary"} />
                </div>

                <div className="relative z-0">
                    <div className="relative h-[500px] w-[500px] rounded-full bg-color-primary translate-x-80 -translate-y-20">

                        <img src={BlackDot} alt="Food" className="absolute left-0 top-60 transform -translate-x-80 -translate-y-24 w-20" />
                        <img src={WhiteDot} alt="Food" className="absolute left-0 top-60 transform translate-x-40 translate-y-32 w-20" />
                        <img src={Food} alt="Food" className="absolute left-0 top-60 transform -translate-x-72 -translate-y-1/3 w-[700px] h-72" />

                    </div>
                </div>

            </div>
            <div className="flex justify-evenly">
                <div className=" h-52 w-52 bg-color-secondary rounded-t-full">
                    <img src={Men} alt="" className=" h-64 -translate-y-12 translate-x-4" />

                </div>
                {/* The content goes here! */}
                <div className="w-[400px] flex flex-col gap-4">
                    <div className="flex space-x-2 items-center">

                        <span className="font-bold text-[20px]">Why Customer</span>
                        <span className="text-color-primary font-bold text-[20px]">Love Us</span>
                    </div>
                    <span className="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur. Sed diam dolor vivamus nibh fermentum vulputate tortor. Egestas facilisi luctus turpis arcu dignissim. Amet neque enim etiam purus id. Tortor sit orci blandit cursus turpis.
                    </span>
                    <Button label={"Explore Our Story"} color={"color-secondary"} icon={<FaArrowRightLong />} addClass={"w-48"} />
                </div>
            </div>


            <div className="flex flex-col items-center mt-10 gap-4">
                <div className="flex space-x-1 text-[20px] font-bold">
                    <span>Our</span>
                    <span className="text-color-primary">Most Popular</span>
                    <span>Recipes</span>
                </div>
                <span className="text-gray-500 text-[14px]">Browse through a varieties of recipes with fresh ingredients selected only from the best places</span>
                <div className="flex gap-2 ">
                    <Button label={"Buff"} addClass={"text-slate-900 border-slate-900"} />
                    <Button label={"Chicken"} addClass={"text-slate-900"} />
                    <Button label={"Veg"} addClass={"text-slate-900"} />
                </div>
                <div className="flex gap-3">
                    <img src={Menu1} alt="" className="w-60" />
                    <img src={Menu2} alt="" className="w-60" />
                    <img src={Menu3} alt="" className="w-60" />

                </div>
                <Button label={"Explore Our Menu"} icon={<FaArrowRightLong />} color={"color-secondary"} />


                <div className="flex flex-col items-center gap-4 mt-7">
                    <div className="flex space-x-1 text-[20px] font-bold">
                        <span className="text-color-primary">We Offer People</span>
                        <span>The Service They Want</span>
                    </div>
                    <div className="w-full">
                        <img src={VideoImage} alt="" />
                    </div>

                    <div className=" w-full flex justify-evenly mt-10">
                        <div className="flex flex-col items-center gap-2">
                            <img src={Quality} alt="" />
                            <span className="font-bold text-[19px]">Quality Food</span>
                            <div className="flex flex-col items-center">
                                <span className="text-gray-500">Only the best food with top quality</span>
                                <span className="text-gray-500">products and ingredients</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <img src={Party} alt="" />
                            <span className="font-bold text-[19px]">Private Party</span>
                            <div className="flex flex-col items-center">
                                <span className="text-gray-500">Get the best food for all your private</span>
                                <span className="text-gray-500">parties and gatherings</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <img src={Chef} alt="" />
                            <span className="font-bold text-[19px]">Categring</span>
                            <div className="flex flex-col items-center">
                                <span className="text-gray-500">Get the best food for any occasions</span>
                                <span className="text-gray-500"> and gatherings</span>
                            </div>
                        </div>

                    </div>

                    <div className="flex items-center mt-5">

                        <Button label={"Explore Our Service"} icon={<FaArrowRightLong />} color={"color-secondary"} />
                    </div>

                    <div className="bg-gray-100 mt-5 w-full h-[500px] flex justify-center items-center gap-20">
                        <div className="flex flex-col gap-5 w-[400px]">
                            <div className="flex flex-col">
                                <div className="flex space-x-1 text-[25px] font-bold">

                                    <span>200+</span>
                                    <span className="text-color-primary">Happy Customer</span>
                                </div>
                                <span className="text-color-secondary">What our customer says about us</span>
                            </div>
                            <div className="flex flex-col justify-center gap-2">
                                <span><i>“Only the best momo you can find in the market. Different Varieties of momo to choose from. Will be visiting again soon”</i></span>
                                <span className="font-bold">Livia Dias</span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="border b-5 rounded-full p-2">
                                    <FaArrowRightLong className="transform rotate-180" />
                                </div>
                                <div className="border b-2 rounded-full p-2">
                                    <FaArrowRightLong className="" />
                                </div>
                            </div>
                        </div>


                        <div>
                            <img src={Testimonal} alt="" className="h-96 w-80" />

                        </div>




                    </div>
                    <div className="w-full flex flex-col items-center gap-7">
                        <div>

                            <div className="flex items-center justify-center space-x-2 mt-10 font-bold text-[24px]">
                                <span>Get</span>
                                <span className="text-color-primary">In Touch</span>
                            </div>
                            <div>
                                <span className="text-color-secondary text-[14px] font-bold"> Our friendly team would love to hear from you</span>
                            </div>
                        </div>

                        <div className=" w-3/5 h-[600px] flex justify-center p-5 rounded-md shadow-2xl gap-5">
                            <div className="bg-color-secondary w-1/3 p-5 rounded-md text-white text-[14px]">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center space-x-2">
                                        <FaLocationDot />
                                        <span>Our Address</span>
                                    </div>

                                    <div>
                                        <span><i>New Baneshwor, Kathmandu, Bagmati, Nepal</i></span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <FaPhone />
                                        <span>Our Contacts</span>
                                    </div>

                                    <div className="flex gap-14">
                                        <div className="flex flex-col">
                                            <span>Mobile</span>
                                            <span>9803434344</span>
                                            <span>9843243433</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span>Landline</span>
                                            <span>01-4708934</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <IoMdTime />
                                        <span>Our Services Time</span>
                                    </div>

                                    <div className="flex gap-14">
                                        <div className="flex flex-col">
                                            <span>MON - FRI</span>
                                            <span>10 am - 8 pm</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span>SAT - SUN</span>
                                            <span><i>Closed</i></span>
                                        </div>
                                    </div>

                                </div>
                                <div className="flex flex-col mt-20 gap-3">
                                    <span><i>Get in touch in social networks</i></span>
                                    <div className="flex items-center space-x-2">
                                        <TiSocialFacebook />
                                        <SlSocialInstagram />
                                        <RiTiktokFill />
                                    </div>
                                </div>

                            </div>
                            <div className="w-2/3 rounded-md flex flex-col p-5">
                                <div className="flex w-full justify-between gap-2">

                                    <Input label={"First Name"} type={"text"} />
                                    <Input label={"Secod Name"} type={"text"} />
                                </div>

                                <Input label={"Email"} type={"text"} addclass={""} />

                                <div className="w-full mt-4 flex flex-col gap-2">
                                    <span>What can we do for you</span>

                                    <select
                                        className="border rounded-lg p-2 outline-none w-full text-gray-900 text-md">
                                        <option value="" disabled>
                                            Choose
                                        </option>
                                        <option value="option1">Ask Query</option>
                                        <option value="option2">Delivery Flexibility</option>
                                        <option value="option3">Payment Method</option>
                                    </select>
                                </div>
                                <div className="w-full mt-4 flex flex-col gap-2">
                                    <span>Phone Number</span>

                                    <input type="tel" />
                                </div>




                            </div>


                        </div>
                        <div className="w-full flex flex-col mt-4 h-96 z-0">
                            <Map
                                currentMarkerPosition={currentMarkerPosition}
                            />

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
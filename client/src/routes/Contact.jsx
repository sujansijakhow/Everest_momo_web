
import { useState } from "react";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import Map from "../components/common/Map";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Input from "../components/common/Input"
import Button from "../components/common/Button";

function Contact() {
    const initialPosition = { lat: 27.6915, lng: 85.342 };
    const [currentMarkerPosition, setCurrentMarkerPosition] = useState(initialPosition);
    return (

        <div>
            <Navbar />
            <div className="flex flex-col gap-4 mt-32 items-center">
                <span className="text-color-secondary text-[28px] font-allura">Our Contact</span>
                <span className="text-gray-500 text-[24px]">GET IN TOUCH</span>
                <div className="flex gap-1 font-bold text-[20px]">

                    <span className="text-color-primary">Our Friendly team</span>
                    <span>would love to hear from you</span>
                </div>


            </div>

            <div className="flex gap-10 px-40 py-10">

                <div className="w-80 h-48 shadow-lg flex flex-col px-6 rounded-lg justify-evenly">
                    <div className="flex space-x-2 items-center">
                        <FaLocationDot className="text-color-primary" />
                        <span className="text-[13px] font-bold">LOCATION</span>

                    </div>
                    <div className="flex flex-col gap-1 font-bold text-[13px]">
                        <span><i>New Baneshowr-41201</i></span>
                        <span><i>Kathmandu, Bagmati, Nepali</i></span>
                    </div>
                </div>
                <div className="w-80 h-48 shadow-lg flex flex-col px-6 rounded-lg justify-evenly">
                    <div className="flex space-x-2 items-center">
                        <FaPhone className="text-color-primary" />
                        <span className="text-[13px] font-bold">PHONE</span>

                    </div>
                    <div className="flex flex-col gap-1 font-bold text-[13px]">
                        <div className="flex justify-between">
                            <span className="text-color-secondary">Mobile:</span>
                            <div className="flex flex-col gap-1">
                                <span>(+977) 980 5687843</span>
                                <span>(+977) 980 5687843</span>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-color-secondary">Tel:</span>
                            <div className="flex flex-col gap-1">
                                <span>01-4783347</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-80 h-48 shadow-lg flex flex-col px-6 rounded-lg justify-evenly">
                    <div className="flex space-x-2 items-center">
                        <IoMdTime className="text-color-primary" />
                        <span className="text-[13px] font-bold">SERVICE TIME</span>

                    </div>
                    <div className="flex flex-col gap-1 font-bold text-[13px]">
                        <div className="flex justify-between">
                            <span className="text-color-secondary">MON - FRI:</span>
                            <div className="flex flex-col gap-1">
                                <span>8 am - 8 pm</span>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-color-secondary">SAT - SUN</span>
                            <div className="flex flex-col gap-1">
                                <span>Closed</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="w-full h-[800px] flex gap-5 justify-between bg-gray-50">
                <div className="w-1/2 h-full">
                    <Map
                        currentMarkerPosition={currentMarkerPosition}
                    />

                </div>
                <div className="py-10 px-20 w-[800px] h-full">
                    <form action="
                    ">
                        <div className="w-[90%] h-full shadow-lg p-5 flex flex-col gap-3 bg-white rounded-lg">
                        <div className="font-bo ld flex space-x-2 text-[20px]">
                            <span className="text-color-primary">Contact</span>
                            <span>Us</span>
                        </div>
                        <div className="text-gray-500 text-[13px]">
                            <span>If you have any queries, send us a message. Our Friendly team would love to hear from you</span>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex gap-5">
                                <Input label={"First Name"} type={"text"}/>
                                <Input label={"Last Name"} type={"text"}/>

                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="">What can we do for you</span>
                                <select
                                    className="border rounded-lg p-2 outline-none w-full text-gray-900 text-md">
                                    <option value="option1" defaultValue={"Choose"}>
                                        Choosess
                                    </option>
                                    <option value="option2">Ask Query</option>
                                    <option value="option3">Delivery Flexibility</option>
                                    <option value="option4">Payment Method</option>
                                </select>
                            </div>
                            <div>
                                <Input label={"Email"} type={"text"}/>
                            </div>
                            <div className="flex flex-col gap-2"> 
                                <span>Phone Number</span>
                                <PhoneInput
                                    country={'np'} containerClass="w-full" inputClass="w-full"/>
                            </div>
                            <div>
                                <span>Message</span>
                                <textarea id="message" name="message" rows="4" cols="4" required  className="mt-1 block w-full p-2.5 border outline-none resize-none border-gray-300 rounded-lg"></textarea>
                            </div>
                            <div className="mt-5">
                                <Button label={"Send Message"} color={"color-secondary"} addClass={"py-2 px-8"} clickhandler={"Submit"}/>
                            </div>
                        </div>


                    </div>
                    </form>
                    
                </div>

            </div>

            <Footer />


        </div>
    );
}

export default Contact;
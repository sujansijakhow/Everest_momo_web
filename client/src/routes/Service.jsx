
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Service0 from "../images/Service.png"
import Video from "../images/servicevideo.png"
import Party from "../images/party.png"
import QR from "../images/Qr.png"
import Service1 from "../images/Service1.png"
import Chef from "../images/Chef.png"
import Service2 from "../images/Service2.png"
import Button from "../components/common/Button";


function Service() {

    return (
        <div>
            <Navbar />

            <div className="flex justify-evenly mt-32">
                <div className="flex flex-col gap-4">
                    <span className="text-color-secondary text-[28px] font-allura">Our Services</span>
                    <span className="text-gray-500 text-[24px]">KNOWING OUR CUSTOMERS NEEDS</span>
                    <div className="flex flex-col gap-0 font-bold text-[20px]">

                        <span className="text-color-primary">We're more than just momos</span>
                        <span>We're full-service dining experience</span>
                    </div>


                </div>
                <div className="relative">
                    <div className="relative w-52 h-52 rounded-full bg-color-secondary z-10">

                        <img src={Service0} alt="Food" className="absolute w-80 h-72 -translate-y-24 z-5" />
                        {/* <img src={Blackdot} alt="Food" className="absolute z-0 transform -translate-y- w-20" /> */}

                    </div>
                </div>

            </div>
            <div className="mt-20">
                <img src={Video} alt="" className="w-full" />
            </div>

            <div className="flex justify-evenly mt-16">
                <div className="flex flex-col w-[400px]">
                    <div className="flex flex-col gap-3">

                        <img src={Party} alt="" className="w-16"/>
                        <span className="font-bold text-[20px]">Private Party</span>
                        <span>Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.</span>
                    </div>

                    <div className="flex justify-between">
                        <div className="flex flex-col justify-center gap-0">
                            <span className="text-color-secondary text-[20px] font-bold"> Scan the QR code</span>
                            <span className="text-[14px] text-gray-500">You can also check about the service</span>
                        </div>
                        <div>
                            <img src={QR} alt="" className="w-32"/>
                        </div>
                    </div>
                </div>
             
                <div>
                    <img src={Service1} alt="" className="w-96 rounded-md"/>

                </div>

            </div>
            <div className="flex flex-row-reverse justify-evenly mt-16">
                <div className="flex flex-col w-[400px]">
                    <div className="flex flex-col gap-3">

                        <img src={Chef} alt="" className="w-16"/>
                        <span className="font-bold text-[20px]">Private Party</span>
                        <span>Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.</span>
                    </div>

                    <div className="flex justify-between">
                        <div className="flex flex-col justify-center gap-0">
                            <span className="text-color-secondary text-[20px] font-bold"> Scan the QR code</span>
                            <span className="text-[14px] text-gray-500">You can also check about the service</span>
                        </div>
                        <div>
                            <img src={QR} alt="" className="w-32"/>
                        </div>
                    </div>
                </div>
                
                <div>
                    <img src={Service2} alt="" className="w-96 rounded-md"/>

                </div>

            </div>

            <div className="w-full flex justify-center mt-10">
                <div className="bg-gray-100 w-[75%] h-60 rounded-lg flex flex-col items-center justify-center gap-8">
                    <div className="flex flex-col gap-1 items-center">
                        <span className="text-[20px] font-bold">Got any Queries?</span>
                        <span className="text-[13px] text-gray-500">If you have any queries, send us message. Our friedly team would love to hear from you</span>
                    </div>
                    <div>
                        <Button label={"Get in Touch"} color={"color-secondary"}/>
                    </div>

                </div>
            </div>
            <Footer />
            service
        </div>
    )
}

export default Service;
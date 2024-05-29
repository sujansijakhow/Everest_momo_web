
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Service0 from "../images/Service.png"
import Video from "../images/servicevideo.png"

function Service() {

    return (
        <div>
            <Navbar />

            <div className="flex justify-evenly mt-32">
                <div className="flex flex-col gap-4">
                    <span className="text-color-secondary text-[24px]">Our Services</span>
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
            <Footer />
            service
        </div>
    )
}

export default Service;
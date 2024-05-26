import { FaArrowRightLong } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import Button from "../components/common/Button";

import Food from "../images/food.png"
import BlackDot from "../images/blackdot.png"
import WhiteDot from "../images/whitedot.png"
import Men from "../images/men.png"

function Home() {
    return (
        <div>
            <Navbar />
            <div className="flex justify-evenly gap-5">
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
                    <img src={Men} alt="" className=" h-64 -translate-y-12 translate-x-4"/>

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
                    <Button label={"Explore Our Story"} color={"color-secondary"} icon={<FaArrowRightLong />} addClass={"w-44"}/>
                </div>
            </div>

            Home
        </div>
    );
}

export default Home;
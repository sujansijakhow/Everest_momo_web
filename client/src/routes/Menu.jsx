import Navbar from "../components/Navbar";
import QR from "../images/Qr.png"
import Mobile from "../images/Mobile.png"
import Menu0 from "../images/Menu.png"
import Menu1 from "../images/Menu1.png"
import Menu2 from "../images/Menu2.png"
import Footer from "../components/Footer";

function Menu() {

    return (
        <div>
            <Navbar />
            <div className="flex flex-col gap-5 items-center mt-32">
                <div className="text-color-secondary text-[24px]">Our Menu</div>
                <div className="flex flex-col items-center space-x-2 font-bold text-[20px]">
                    <span className="text-color-primary">Our menu is more than just momos,</span>
                    <span>with a variety of dishes to cater all tastes and preferences</span>
                </div>


            </div>

            <div className="px-24 mt-10">
                <div className="bg-gray-100 h-72 p-5 rounded-md flex flex-col justify-between items-center">
                    <div className="flex flex-col gap-1 items-center">
                        <span className="font-bold text-color-secondary text-[17px]">Scan the QR codex</span>
                        <span className="text-[14px] text-gray-500">You can also check the allergy devices using your phone as well</span>
                    </div>

                    <div className="flex flex-col gap-1">
                        <img src={QR} alt="" className="w-36 border-8 rounded-md border-black" />
                        <div className="flex space-x-2 text-[20px] font-bold">
                            <span className="text-color-primary">SCAN</span>
                            <span>ME!</span>
                            <img src={Mobile} alt="" className="w-8 h-8" />
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <div className="flex gap-1 flex-col mt-20 justify-center">
                    <div className="font-bold text-[20px] flex space-x-2 justify-center">

                        <span className="text-color-primary ">BUFF</span>
                        <span className="">MOMO's</span>
                    </div>

                    <div className="flex flex-col gap-20 px-10">
                        <div className="flex justify-evenly w-full">
                            <div className="flex flex-col gap-1 w-[300px] items-center">

                                <img src={Menu} alt="" className="w-52" />
                                <span className="text-gray-500">(Freshly Steamed Buff Momos made from whole wheat and kneaded with beta Carotene Rich Vegetable Juice)</span>
                            </div>
                            <div className="flex flex-col gap-1 w-[300px] items-center">

                                <img src={Menu1} alt="" className="w-52" />
                                <span className="text-gray-500">(Freshly Steamed Buff Momos made from whole wheat and kneaded with beta Carotene Rich Vegetable Juice)</span>

                            </div>

                        </div>

                        <div className="flex justify-evenly">

                            <div className="flex flex-col gap-1 w-[300px] items-center">

                                <img src={Menu2} alt="" className="w-52" />
                                <span className="text-gray-500">(Freshly Steamed Buff Momos made from whole wheat and kneaded with beta Carotene Rich Vegetable Juice)</span>

                            </div>
                            <div className="flex flex-col gap-1 w-[300px] items-center">

                                <img src={Menu1} alt="" className="w-52" />
                                <span className="text-gray-500">(Freshly Steamed Buff Momos made from whole wheat and kneaded with beta Carotene Rich Vegetable Juice)</span>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex gap-1 flex-col mt-20 justify-center">
                    <div className="font-bold text-[20px] flex space-x-2 justify-center">

                        <span className="text-color-primary ">CHICKEN</span>
                        <span className="">MOMO's</span>
                    </div>

                    <div className="flex flex-col gap-20 px-10">
                        <div className="flex justify-evenly w-full">
                            <div className="flex flex-col gap-1 w-[300px] items-center">

                                <img src={Menu0} alt="" className="w-52" />
                                <span className="text-gray-500">(Freshly Steamed Buff Momos made from whole wheat and kneaded with beta Carotene Rich Vegetable Juice)</span>
                            </div>
                            <div className="flex flex-col gap-1 w-[300px] items-center">

                                <img src={Menu1} alt="" className="w-52" />
                                <span className="text-gray-500">(Freshly Steamed Buff Momos made from whole wheat and kneaded with beta Carotene Rich Vegetable Juice)</span>

                            </div>

                        </div>

                        <div className="flex justify-evenly">

                            <div className="flex flex-col gap-1 w-[300px] items-center">

                                <img src={Menu2} alt="" className="w-52" />
                                <span className="text-gray-500">(Freshly Steamed Buff Momos made from whole wheat and kneaded with beta Carotene Rich Vegetable Juice)</span>

                            </div>
                            <div className="flex flex-col gap-1 w-[300px] items-center">

                                <img src={Menu1} alt="" className="w-52" />
                                <span className="text-gray-500">(Freshly Steamed Buff Momos made from whole wheat and kneaded with beta Carotene Rich Vegetable Juice)</span>

                            </div>
                        </div>

                    </div>
                </div>

                <Footer />


            </div>
        </div>
    );
}

export default Menu;
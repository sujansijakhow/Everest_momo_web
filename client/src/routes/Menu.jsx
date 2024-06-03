import Navbar from "../components/Navbar";
import Menu0 from "../images/Menu.png"
import Menu1 from "../images/Menu1.png"
import Menu2 from "../images/Menu2.png"
import Footer from "../components/Footer";
import Scan from "../components/common/Scan";
import Bufftext from "../images/Buffheading.png"
import Chickentext from "../images/Chickentext.png"

function Menu() {

    return (
        <div>
            <Navbar />
            <div className="flex flex-col gap-5 items-center mt-32">
                <div className="text-color-secondary text-[28px] font-allura">Our Menu</div>
                <div className="flex flex-col items-center space-x-2 font-bold text-[20px]">
                    <span className="text-color-primary">Our menu is more than just momos,</span>
                    <span>with a variety of dishes to cater all tastes and preferences</span>
                </div>


            </div>

            <Scan />

            <div>
                <div className="flex gap-1 flex-col mt-20 justify-center">
                    <img src={Bufftext} alt="" />

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
                <div className="flex gap-1 flex-col mt-20 mb-16 justify-center">
                  
                  <img src={Chickentext} alt="" />  

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
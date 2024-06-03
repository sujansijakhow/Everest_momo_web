import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Service0 from "../images/Service.png"
import Vector from "../images/Vector.png"
import Vector1 from "../images/Vector1.png"
import Scan from "../components/common/Scan.jsx";
import Allergyheading from "../images/Allergyheading.png"
import Ingredientheading from "../images/Ingredientheading.png"
import Allergytext from "../images/Allergytext.png"
function Allergy() {


    return (
        <div>
            <Navbar />
            <div className="flex justify-evenly mt-32">
                <div className="flex flex-col gap-4 w-96">
                <span className="text-color-secondary text-[28px] font-allura">Allergy Advice</span>
                    <span className="text-gray-500 text-[24px]">AT OUR RESTAURANT</span>
                    <div className="flex flex-col gap-0 font-bold text-[20px]">

                        <span>We use only the freshest and highest quality ingredients in all our dishes,</span>
                        <span className="text-color-primary">and offer transparency in our ingredient labeling.</span>
                    </div>


                </div>
                <div className="relative">
                    <div className="relative w-52 h-52 rounded-full bg-color-secondary z-10">

                        <img src={Service0} alt="Food" className="absolute w-80 h-72 -translate-y-24 z-5" />

                    </div>
                </div>

            </div>
            <img src={Ingredientheading} alt="" />

            <div className="ml-60 ">
                <img src={Vector} alt="" className="w-96" />
                <div className="w-[600px] h-52 rounded-md border-2 translate-x-10 -translate-y-72 bg-white border-color-secondary">
                    <div className="p-7 flex flex-col gap-3">

                        <span className="font-bold">For the Dough</span>
                        <div>
                            <ul className="list-circle pl-5 space-y-2">
                                <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">120 gms refined flour</li>
                                <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">1/4 tsp baking powder</li>
                                <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">1/2 tsp salt water (for Kneading)</li>

                            </ul>

                        </div>
                    </div>
                </div>
                <div className="w-[600px] h-auto rounded-md border-2 translate-x-10 -translate-y-72 bg-white mt-8 border-color-secondary">
                    <div className="p-7 flex flex-col gap-3">

                        <span className="font-bold">For the chicken filling:</span>
                        <div>
                            <ul className="list-circle pl-5 space-y-2">
                                <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">1 cup chicken (minced)</li>
                                <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">1/2 cup onions, finely chopped</li>
                                <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">1/4 tsp black pepper powder</li>
                                <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">1 tbsp oil</li>
                                <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">1/2 tsp garlic paste</li>
                                <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">1/2 tsp soya sauce</li>
                                <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">salt</li>
                                <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">1/4 tsp vinegar</li>

                            </ul>

                        </div>
                    </div>
                </div>
                <div className="w-[600px] h-auto rounded-md border-2 translate-x-10 -translate-y-72 bg-white mt-8 border-color-secondary">
                    <div className="p-7 flex flex-col gap-3">

                        <span className="font-bold">For the Vegeterain filling:</span>
                        <div>
                            <ul className="list-circle pl-5 space-y-2">
                                <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">1 cup cabbage and carrots, grated</li>
                                <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">2 tbsp onions, finely chopped</li>
                                <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">1/2 garlic, finely chopped</li>
                                <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">1 tbsp oil</li>
                                <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">1/4 tsp vinegar</li>
                                <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">1/2 tsp soya sauce</li>
                                <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">to taste salt </li>
                                <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">to taste pepper</li>
                                <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">1 tbsp cornflour</li>

                            </ul>

                        </div>
                    </div>
                </div>
                <div className="relative z-20 h-[100px]">

                    <div className="w-[600px] absolute h-auto rounded-md border-2 translate-x-10 -translate-y-72 z-10  mt-8 bg-white border-color-secondary">
                        <div className="p-7 flex flex-col gap-3">

                            <span className="font-bold">For the Chilli Sauce:</span>
                            <div>
                                <ul className="list-circle pl-5 space-y-2">
                                    <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">25 gram garlic, peeled</li>
                                    <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">6 gms whole red chillies</li>
                                    <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">3 tbsp vinegar</li>
                                    <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">1 tbsp oil</li>
                                    <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">to taste salt </li>
                                    <li className=" border-b-2 p-1 font-bold text-[13px] border-gray-100">1 tbsp sugar</li>

                                </ul>

                            </div>
                        </div>
                    </div>
                    <img src={Vector1} alt="" className="-translate-y-52 translate-x-[500px] absolute z-0 w-60" />
                </div>

            </div>
            <div className="flex flex-col gap-0">
                <img src={Allergyheading} alt="" className="w-full"/>

                <div className="flex flex-col gap-2 items-center px-20">
                    <span>Lorem ipsum dolor sit amet consectetur. Feugiat lectus sit est blandit in gravida. Nisl facilisis luctus sit porttitor placerat purus tincidunt. Cursus nascetur a mauris odio quis sociis pretium nisl. In viverra diam dis montes orci congue vulputate magna ullamcorper. Semper tellus ipsum felis maecenas ultrices turpis amet euismod malesuada. Amet sed neque vitae malesuada quis sed urna</span>
                    <span>Feugiat orci feugiat cursus risus tincidunt. Aliquet nam iaculis bibendum tortor varius sit. Volutpat nunc nisl quisque elit. Ac est ultricies risus et sed. Donec auctor tristique quam morbi pellentesque et. Scelerisque dui id arcu laoreet iaculis nunc et nulla sed. Aliquet nullam vulputate quis ut mi placerat auctor. Ipsum massa suspendisse netus mollis interdum.</span>
                    <span>Augue leo eget ut vitae maecenas ac. Metus massa nunc tristique donec dignissim aenean congue justo et. Parturient elit adipiscing non vitae mattis. Congue senectus urna cursus nisi nisl nisl tincidunt rhoncus. Congue sit etiam vestibulum elit aenean leo enim volutpat. Aliquet vitae condimentum bibendum ullamcorper vel cursus libero netus bibendum. Lorem id ut proin tincidunt. Nibh nunc amet odio est et. Sem dui nunc morbi leo quisque viverra ultrices. Mattis at tempus ultricies ut feugiat nunc dignissim. Urna turpis purus turpis elit risus.</span>
                    <span>Sed elit ornare senectus dignissim diam dolor sed dictum. Faucibus mauris senectus odio blandit diam nunc. Urna volutpat ut potenti ut mus orci neque sem. Mattis amet at amet faucibus nisl morbi aenean ac. Justo turpis bibendum donec lacinia. Enim integer ornare nibh urna enim tortor arcu sit lacinia. Dapibus praesent vitae dolor cursus fringilla hac facilisis pellentesque. Elementum lacus varius et neque amet aliquam donec sed. Ultrices euismod commodo id vehicula commodo. Amet lorem eros nulla mauris. Sit arcu enim sit nunc mi sed aenean. Ornare enim vitae volutpat est dui tortor. Viverra habitant et consequat vitae elit aliquet iaculis in tristique.</span>
                    <span>Quam ipsum viverra ac laoreet platea in praesent. Mattis molestie arcu nulla convallis interdum proin dui ut porta. Amet potenti praesent pulvinar scelerisque vitae habitant eget. Senectus hac id aliquam ipsum urna. Est ut amet nec sollicitudin nunc viverra nec ipsum suspendisse. Etiam risus ultricies dictum nisl. Bibendum ultrices elementum feugiat erat suspendisse mi fermentum magna suspendisse. Nisi mattis consequat nec donec eu amet nulla a. At blandit vulputate morbi tortor amet. Hac nec gravida tempor ac. Senectus nunc libero scelerisque quisque. Risus condimentum mattis massa integer.</span>
                </div>
            </div>

           <Scan />
           <div className="mb-16">
            
           </div>



            <div>

                <Footer />
            </div>
        </div>

    );


}

export default Allergy;
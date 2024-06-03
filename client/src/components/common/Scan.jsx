
import QR from "../../images/Qr.png"
import Mobile from "../../images/Mobile.png"
function Scan (){

    return(
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
    )
}

export default Scan;
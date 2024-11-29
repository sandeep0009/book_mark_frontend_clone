import { FaFacebook, FaTwitter } from "react-icons/fa"


const Footer = () => {
  return (
    <div className="bg-[#001E53] bottom-0 w-full md:h-40 h-96">
        <div className="max-w-4xl m-auto">
            <div className="flex flex-col md:flex-row  justify-between text-white py-12 text-center items-center ">
                <div className="flex flex-col md:flex-row  gap-12 text-center items-center">
                    <div className="text-2xl cursor-pointer">
                        BOOKMARK
                    </div>
                    <div>
                        <ul className="flex flex-col md:flex-row justify-center gap-6 cursor-pointer ">
                            <li className="text-slate-600 hover:text-red-600">FEATURES</li>
                            <li className="text-slate-600 hover:text-red-600">DOWNLOADS</li>
                            <li className="text-slate-600 hover:text-red-600">FAQ</li>
                        </ul>
                    </div>

                </div>
                <div className="flex gap-6 md:mt-0 mt-12 cursor-pointer">
                    <FaFacebook size={24}/>
                    <FaTwitter size={24}/>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Footer
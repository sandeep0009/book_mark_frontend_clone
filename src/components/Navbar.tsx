
const Navbar = () => {
  return (
    <div className="max-w-4xl m-auto text-xl">
        <div className="flex justify-between text-center items-center">
            <div className="font-bold text-blue-900">
                BOOKMARK
            </div>

            <div className="flex justify-between gap-10 text-center items-center">
                <ul className="flex gap-8 text-center text-gray-500 cursor-pointer ">
                    <li className="hover:text-red-500">Feautures</li>
                    <li className="hover:text-red-500">Download</li>
                    <li className="hover:text-red-500">Faq</li>
                </ul>

                <button className="bg-red-400 text-white w-24 h-12 rounded-lg ">LOGIN</button>
            </div>

        </div>
    </div>
  )
}

export default Navbar
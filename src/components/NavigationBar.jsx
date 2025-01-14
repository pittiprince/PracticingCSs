export const NavigationBar = () => {
    return (
        <div className=" bg-black grid grid-cols-12 h-[100px]">
            <div className="  col-span-2 flex justify-center items-center">
                <h1 className="font-bold text-xl text-white ">prince.</h1>
            </div>
            <div className="  col-span-8 list-none flex items-center justify-center gap-3 text-white text-lg font-medium cursor-pointer">
                <li className="transition-all duration-700 ease-in-out hover:scale-110 hover:underline">Home</li>
                <li className="transition-all duration-700 ease-in-out  hover:text-xl hover:underline">Portfolio</li>
                <li className="transition-all duration-700 ease-in-out hover:text-xl  hover:underline">Skills</li>
                <li className="transition-all duration-700 ease-in-out  hover:text-xl  hover:underline">About Me</li>
            </div>
            <div className=" col-span-2 flex justify-center items-center">
                <button className="bg-[#925FF0] rounded w-1/2 h-1/3 text-white transition-all  hover:bg-white hover:text-black">Contact Me</button>
            </div>
        </div>
    )
}
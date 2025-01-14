export const HeroSection = () => {
    return (
        <div id="mainSection" className="grid grid-cols-12 bg-black">
            <div id="Left" className=" h-screen col-span-6 ">
                <img src="src/assets/Portal.svg" alt="A diamond shape" className="absolute top-[12rem] left-[37.5rem] w-[7rem]" />
                <div id="MainHeading" className="top-[3rem] w-full h-1/3 flex flex-col justify-center items-center relative  ">
                    <h1 className="font-Anton text-[8rem]  text-white relative top-[4.5rem] right-3 ">PRODUCT</h1>
                    <h1 className="font-Anton text-[8rem]  text-white  ">DESIGNER</h1>
                </div>
                <div>
                    <h1 class="text-[4.6rem] font-Anton bg-gradient-to-r from-pink-400 to-yellow-300 bg-clip-text text-transparent relative top-[4.3rem] left-[9rem]">
                    CRISTIAN MUÑOZ
                    </h1>
                </div>
                <div><img src="src/assets/Social Networks Dark.png" alt="social links png" className="w-[28rem] absolute top-[34rem] left-36" /></div>
                <div><button className="bg-white relative top-[9rem] left-[9rem] w-[18rem] h-10 rounded-md transition-all duration-400 ease-in-out hover:bg-gray-500 hover:text-white hover:scale-105 ">Download Curriculum Vitae </button>
                </div>
            </div>
            <div id="Right" className=" col-span-6">
                <img src="src/assets/Escultures.png" alt="hero image" className="h-[37rem] relative left-[7rem] top-3" />
            </div>
        </div>
    )
}
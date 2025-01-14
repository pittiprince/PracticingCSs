export const CTA = () =>{
return(
    <div id="parentDiv" className="w-full h-[18rem] bg-black text-white flex justify-center items-center absolute top-[43rem]  ">
        <div id="MainCTADiv" className="left-2 text-[#C8FEC7] bg-[#0B0B0B] flex justify-evenly w-[77rem] h-[13rem] border-2 border-[#0B0B0B]-  shadow-md shadow-[#0B0B0B]-800 rounded-2xl p-5 relative gap-9  font-Anton" >
            <div>
                <h1 className="text-[4.5rem]">90%</h1>
                <p className="text-[1.3rem]">Job Sucess</p>
                <p className="text-[1.1rem]">Score on Upwork</p>
            </div>
            <img src="" alt="" srcset="" />
            <div>
            <h1 className="text-[4.5rem]"> >25.000</h1>
                <p className="text-[1.3rem]">Duplicates on Figme</p>
                <p className="text-[1.1rem]">Community</p>
            </div>
            <img src="" alt="" srcset="" />
            <div>
            <h1 className="text-[4.5rem]"> >2K</h1>
                <p className="text-[1.3rem]">In Finished</p>
                <p className="text-[1.1rem]">Works</p>
            </div>
        </div>
    </div>
)
}
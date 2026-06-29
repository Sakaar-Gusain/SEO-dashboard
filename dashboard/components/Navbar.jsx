import Theme from "./Theme";
const Navbar =() =>{
    return(
        <nav className="flex sticky top-0 z-50 w-full bg-zinc-900 justify-between items-center backdrop-blur-md py-4 px-4 md:py-5 md:px-6 shadow-zinc-950">
            <div className="bg-linear-to-r  from-[#66a3ff] via-[#3385FF] to-[#0025cc] bg-clip-text text-transparent font-bold sm:text-xl md:text-3xl mt-3 mb-1">SEO analytics Dashboard</div>
            
            <div className=" flex items-center  rounded-full mr-6 gap-10">
                <Theme/>
            </div>
        </nav>
    );
}

export default Navbar;
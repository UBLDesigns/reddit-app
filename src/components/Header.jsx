import { Link } from "react-router-dom";
import viteLogo from '/vite.svg'
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Header = ({search, setSearch, submitSearch}) => {
    return (
        <header className="backdrop-blur-sm bg-white/10 border-b border-white/15 h-[80px] p-6 flex justify-between text-white/70 fixed top-0 left-0 w-full z-20">
            <Link to="/" className="w-1/4">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </Link>
            <div className="flex justify-end items-center gap-2 w-3/4 md:w-2/4 lg:w-1/4">
                <input onChange={(e) => setSearch(e.target.value)} type="text" className="py-1.5 px-3 rounded-3xl w-full text-zinc-700" value={search} />
                <button onClick={submitSearch} className="bg-[#FF4500] rounded-full p-2 hover:ring-4 hover:ring-[#ff3300] hover:bg-[#ff3300]"><MagnifyingGlassIcon className="w-5 h-5 text-white" /></button>
            </div>
        </header>
    );
}

export default Header;
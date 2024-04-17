import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
const Slider = ({images, title}) => {
    images = images[0];

    const [position, setPosition] = useState(0);
    const end = images.length-1;

    const nextPosition = () => {
        const newPosition = position+1;
        if(newPosition > end) setPosition(0);
        if(newPosition <= end) setPosition(newPosition);
    }

    const prevPosition = () => {
        const newPosition = position-1;
        if(newPosition < 0) setPosition(end);
        if(newPosition >= 0) setPosition(newPosition);
    }

    return (
        <div id="controls-carousel" className="relative w-full mb-4">
            <div className="w-full h-auto overflow-hidden rounded-lg">
                <div className="duration-700 h-auto ease-in-out w-full">
                    <img src={images[position]} className="w-full" alt={title} />
                </div>
            </div>
            <button onClick={() => prevPosition()} type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/50 group-hover:bg-white/70 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                    <ChevronLeftIcon className="w-4 h-4 text-orange-600 rtl:rotate-180" />
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button onClick={() => nextPosition()} type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/50 group-hover:bg-white/70 group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
                    <ChevronRightIcon className="w-4 h-4 text-orange-600 rtl:rotate-180" />
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    )
}

export default Slider;
const Image = ({src, title, time}) => {
    return (
        <>
            <div className="absolute top-12 right-2 bg-[#FF4500] text-white py-1 px-2 text-sm rounded-2xl">{time}</div>
            <figure className="mb-4">
                <img className="w-full rounded-2xl border border-black/10" src={src} alt={title} />
            </figure>
        </>
    );
}

export default Image;
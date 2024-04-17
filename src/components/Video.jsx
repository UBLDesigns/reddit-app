const Video = ({video, time}) => {
    return (
        <>
            <div className="absolute top-12 right-2 bg-zinc-900 text-orange-500 py-1 px-2 text-sm rounded-2xl">{time}</div>
            <video controls className="w-full rounded-2xl mb-4">
                <source src={video} type={'video/mp4'}/>
            </video>
        </>
    )
}

export default Video;
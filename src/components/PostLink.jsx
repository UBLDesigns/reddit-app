const PostLink = ({link, title, time}) => {
    return (
        <>
            <div className="mb-6">
                <a href={link} target="_blank" title={title} className="text-orange-600 underline underline-offset-4 hover:text-gray-800 text-2xl break-words">
                    {link}
                </a>
            </div>
            <div className="border-b border-black/10 pb-4 mb-4 text-sm">
                Posted <span className="text-[#FF4500]">{time}</span>
            </div>
        </>
    )
}

export default PostLink;
import { Link } from 'react-router-dom';
import Image from '../../../components/Image';
import Video from '../../../components/Video';
import PostLink from '../../../components/PostLink';
import Slider from '../../../components/Slider';
import ROUTES from '../../../routes';

import { HandThumbUpIcon, HandThumbDownIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/solid';

const PostCard = ({post}) => {
    return (
        <article className="relative p-4 bg-white rounded-md drop shadow-lg font-roboto mb-6 break-inside-avoid">
            <header className="relative">
                <div className="flex justify-between mb-4">
                    <span className="font-bold">{post.author}</span>
                    <a href={post.sub} className="text-[#FF4500] text-sm items-center" target="_blank"><span className="mt-0.5">r/{post.subName}</span></a>
                </div>
                {post.type === 'image' && <Image src={post.images} title={post.title} time={post.time} />}
                {post.type === 'video' && <Video video={post.video} time={post.time} />}
                {post.type === 'link' && <PostLink link={post.link} title={post.title} time={post.time} />}
                {post.type === 'gallery' && <Slider images={[post.gallery]} title={post.title} />}
                <h1 className="mb-4 text-xl font-inter font-bold text-gray-800 tracking-wide">{post.title}</h1>
            </header>
            <section className="pb-24">
                <p className="font-light text-lg mb-8">{post.text? post.text.substring(0, 200)+'...': ''}</p>
                <Link to={ROUTES.postRoute(post.id)} className="bg-white text-[#FF4500] border border-black/20 hover:bg-gray-50 hover:text-[#ff3300] hover:border-black/30 py-2 px-4 rounded-2xl">View Post</Link>
                
            </section>
            <footer className="mt-4 pt-4 border-t border-black/10 absolute bottom-0 left-0 h-20 w-full flex justify-between gap-2 p-6 items-center text-sm">
                <div className="flex gap-2">
                    <span className="border border-gray-200 rounded-2xl py-1 px-2 flex justify-center text-orange-600 gap-2">
                        <HandThumbUpIcon className="w-4 h-4 text-[#FF4500]" /> {post.ups}
                    </span>
                    <span className="border border-gray-200 rounded-2xl py-1 px-2 flex justify-center text-gray-500 gap-2">
                        <HandThumbDownIcon className="w-4 h-4 text-gray-500" /> {post.downs}
                    </span>
                </div>

                <span className="border border-[#FF4500] bg-[#FF4500] rounded-2xl py-1 px-2 flex justify-center text-white gap-2">
                    <ChatBubbleLeftIcon className="mt-0.5 w-4 h-4 text-white" /> {post.commentTotal}
                </span>
            </footer>
        </article>
    );
}

export default PostCard;
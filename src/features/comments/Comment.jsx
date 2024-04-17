import { HandThumbUpIcon, ClockIcon, UserIcon } from '@heroicons/react/24/solid';

const Comment = ({comment}) => {
    if(!comment['author']) return (<></>);
    
    return (
        <div className="p-4 bg-white rounded-md drop shadow-lg font-roboto mb-6 max-w-lg">
            <div className="flex gap-4 justify-between border-b border-black/10 pb-4 mb-4">
                <div className="flex gap-6 text-sm">
                    <p className="border border-black/10 bg-white rounded-2xl py-1 px-2 flex justify-center text-sm text-[#FF4500] gap-1"><UserIcon className="mt-0.5 w-4 h-4" /> {comment['author']}</p>
                    <p className="border border-black/10 bg-white rounded-2xl py-1 px-2 flex justify-center text-sm text-black/50 gap-1"><ClockIcon className="mt-0.5 w-4 h-4" /> {comment['time']}</p>
                </div>
                <div className="border border-zinc-700 bg-zinc-700 rounded-2xl py-1 px-2 flex justify-center text-sm text-white gap-2">
                    <HandThumbUpIcon className="mt-0.5 w-4 h-4 text-white" /> {comment['ups']}
                </div>
            </div>
            <div>
                {comment['body']}
            </div>
        </div>
    );
}

export default Comment;
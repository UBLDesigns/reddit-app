import PostCard from './PostCard';

const Posts = ({posts}) => {
    return (
        <div className="gap-6 sm:columns-1 md:columns-2 lg:columns-3 xl:columns-4">
        {
            Object.values(posts).map((post, key) => {
                return (<PostCard post={post} key={key} />)
            })
        }
        </div>
    );
}

export default Posts;
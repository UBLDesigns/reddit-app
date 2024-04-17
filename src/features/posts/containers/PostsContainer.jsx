import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Posts from '../components/Posts';
import { getPosts } from '../slices/postsSlice';

const PostsContainer = ({endPointSearch}) => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(getPosts(endPointSearch));
    }, [dispatch, endPointSearch]);

    if(Object.values(posts.posts).length){
        return (
            <Posts posts={posts.posts} />
        )
    }

    return (
        <div className="p-4 bg-white rounded-md drop shadow-lg">No communities found</div>
    )
}

export default PostsContainer;
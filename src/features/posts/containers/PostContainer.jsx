import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TimeAgo } from "../../../assets/time/TimeAgo";
import Post from "../components/Post";

const PostContainer = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const post = useSelector((state) => Object.values(state.posts.posts).find(post => post.id === id));
    const [postComments, setPostComments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if(!post) navigate('/');
        const handleBeforeUnload = (e) => e.preventDefault();
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, []);

    useEffect(() => {
        const commentFun = async () => {
            const response = await fetch(`${post.url}.json`);
            const json = await response.json();
    
            if(json.error){
                return;
            }
            
            const newComments = json[1].data.children.map(comment => ({
                id: comment.data.id,
                author: comment.data.author,
                body: comment.data.body,
                time: TimeAgo(comment.data.created),
                ups: comment.data.ups
            }));
        
            setPostComments(prev => [...prev, ...newComments]);
        }
        
        commentFun();
    }, []);

    console.log(post);

    if(post) return (<Post post={post} comments={postComments} />)
}

export default PostContainer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TimeAgo } from "../../../assets/time/TimeAgo";
import { grabImage } from "../../../assets/images/grabImage";
import { v4 as uuidv4 } from "uuid";

export const getPosts = createAsyncThunk(
    'posts/createAsyncThunk',
    async (community) => {
        
        const url = 'https://www.reddit.com';
        
        let apiUrl = 'https://www.reddit.com';
        if(community) apiUrl = 'https://www.reddit.com/r/' + community;
        
        const response = await fetch(`${apiUrl}/.json`);
        const json = await response.json();

        if(json.error){
            return {};
        }

        return json.data.children.map(post => {
            post = post.data;
            
            const downVotes = Math.abs(Math.floor((post.ups * post.upvote_ratio) - post.ups));
            const postID = uuidv4();

            let type = 'text';
            if(post.post_hint && post.post_hint === 'link') type = 'link';
            if(post.post_hint && post.post_hint === 'image') type = 'image';
            if(post.is_video) type = 'video';
            if(post.gallery_data) type = 'gallery';

            let gallery = [];
            if(type === 'gallery'){
                Object.values(post.media_metadata).forEach(image => {
                    gallery.push('https://i.redd.it/'+grabImage(image.s.u));
                });
            }

            return {
                id: postID,
                type: type,
                title: post.title,
                url: `${url}${post.permalink}`,
                author: post.author,
                subName: post.subreddit,
                sub: `${url}/${post.subreddit_name_prefixed}`,
                ups: post.ups,
                downs: downVotes,
                time: TimeAgo(post.created),
                text: post.selftext,
                gallery: gallery,
                commentTotal: post.num_comments,
                images: (type === 'image')? post.url : '',
                video: (type === 'video')? post.media.reddit_video.fallback_url : '',
                link: (type === 'link')? post.url : ''
            }
        });
    });

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: {},
        comments: {},
        loadingPosts: false,
        hasError: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.loadingPosts = true;
                state.hasError = false;
            })
            .addCase(getPosts.rejected, (state) => {
                state.loadingPosts = false;
                state.hasError = true;
            }).addCase(getPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.loadingPosts = false;
                state.hasError = false;
            });
    }
});

export default postsSlice.reducer;
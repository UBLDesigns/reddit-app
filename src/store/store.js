import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/slices/postsSlice';

export default configureStore({
    reducer: {
        posts: postsReducer,
    }
});
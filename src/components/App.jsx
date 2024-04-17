import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Root from './Root'
import PostsContainer from '../features/posts/containers/PostsContainer'
import PostContainer from '../features/posts/containers/PostContainer'

function App({search, setSearch, endPointSearch, submitSearch}) {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={ <Root search={search} setSearch={setSearch} submitSearch={submitSearch} /> }>
            <Route path="/" element={<PostsContainer endPointSearch={endPointSearch} />} />
            <Route path="post/:id" element={<PostContainer />} />
        </Route>
    ));

    return (<RouterProvider router={router}/>)
}

export default App;
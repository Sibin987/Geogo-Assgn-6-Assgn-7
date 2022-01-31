import { useSelector, useEffect } from "react-redux"
import { getAllPosts, getIsFetchingPosts, getErrorPosts } from "./reduxStore/posts/reducers/postsReducer";
const postList = () => {
    const posts = useSelector(getAllPosts);
    const dataFetching = useSelector(getIsFetchingPosts)


    // useEffect(() => {
    //     console.log(posts);
    //   }, [posts])

    if (dataFetching) {
        setTimeout(() => {
            return <p>Hang on for a while...</p>
        }, 2000)
    }
    return (
        <div>
            <h2>Cities</h2>
            {posts.map(post => {
                return (
                    <div key={post._id}>

                        <h4>{post.name}</h4>
                        <h6>{post.createdAt}</h6>
                        <p>{post.updatedAt}</p>
                    </div>
                )



            })}
        </div>
    )
}
export default postList;
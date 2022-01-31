import { useSelector, useEffect } from "react-redux"
import { getAllPosts, getIsFetchingPosts, getErrorPosts } from "./reduxStore/posts/reducers/postsReducer";
const postPropertyList = () => {
    const posts = useSelector(getAllPosts)
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
            <h2>Properties</h2>
            {posts.map(post => {
                return (
                    <div key={post._id}>

                        <h4>{post.title}</h4>
                        <h3>{post.price}</h3>
                        <h3>{post.description}</h3>
                        <h3>{post.pinCode}</h3>

                    </div>
                )



            })}
        </div>
    )
}
export default postPropertyList;
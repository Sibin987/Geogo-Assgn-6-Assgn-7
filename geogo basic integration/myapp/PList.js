import { useSelector, useEffect } from "react-redux"
import { getAllPosts, getIsFetchingPosts, getErrorPosts } from "./reduxStore/posts/reducers/propertysReducer";
const PList = () => {
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
            <h2>Places</h2>
            {posts.map(post => {
                return (
                    <div key={post._id}>

                        <h4>{post.title}</h4>
                        <h6>{post.description}</h6>
                        <p>{post.price}</p>
                        <p>{post.propertyImage}</p>
                    </div>
                )



            })}
        </div>
    )
}
export default PList;
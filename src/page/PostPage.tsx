import { useEffect } from "react"
import { redirect, useNavigate } from "react-router-dom"

const PostPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        // cookie jwt success

      alert("ur not user")
      navigate("/login")
    }, [])
    // function, monitor args
    
    return (
        <div>
            PostPage
        </div>
    )
}

export default PostPage
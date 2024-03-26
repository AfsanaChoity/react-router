import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
const {id, title} = post;

const navigate = useNavigate();
const handleDetails = () =>{
    navigate(`/post/${id}`);

}
    return (
        <div>
            <h4>Post ID : {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <button onClick={handleDetails}>Click to see detils</button>
        </div>
    );
};

export default Post;
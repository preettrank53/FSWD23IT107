import { useParams, useNavigate } from "react-router-dom";
import blogs from "../data";
import "./../styles.css";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));
  const navigate = useNavigate();

  if (!blog) {
    return <p>Blog not found!</p>;
  }

  return (
    <div className="container">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default BlogDetail;

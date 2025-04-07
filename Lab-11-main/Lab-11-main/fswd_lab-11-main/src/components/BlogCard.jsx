import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <h2>{blog.title}</h2>
      <p>{blog.content.substring(0, 100)}...</p>
      <Link to={`/blogs/${blog.id}`}>Read More</Link>
    </div>
  );
};

export default BlogCard;

import blogs from "../data";
import BlogCard from "../components/BlogCard";
import "./../styles.css";

const BlogList = () => {
  return (
    <div className="container">
      <h1>Blog List</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;

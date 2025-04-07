import { Link } from "react-router-dom";
import "./../styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/blogs" className="nav-link">Blogs</Link>
    </nav>
  );
};

export default Navbar;

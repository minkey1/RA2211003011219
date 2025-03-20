import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-around">
      <Link to="/" className="font-bold">Feed</Link>
      <Link to="/top-users">Top Users</Link>
      <Link to="/trending-posts">Trending Posts</Link>
    </nav>
  );
};

export default Navbar;

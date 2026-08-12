import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-4 bg-emerald-950">
      <h2 className="text-3xl font-bold">Logo</h2>
      <div className="flex items-center justify-center gap-8">
        <Link className="text-lg" to='/'>Home</Link>
        <Link className="text-lg" to='/about'>About</Link>
        <Link className="text-lg" to='/courses'>Courses</Link>
        <Link className="text-lg" to='/product'>Product</Link>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="text-white flex items-center justify-between p-5 bg-teal-900">
        <h2 className="text-2xl font-bold">Logo</h2>
        <div>
          <Link className="px-3 py-2 text-white" to='/'>Home</Link>
          <Link className="px-3 py-2 text-white" to='/about'>About</Link>
          <Link className="px-3 py-2 text-white" to='/contact'>Contact</Link>
          <Link className="px-3 py-2 text-white" to='/product'>Product</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

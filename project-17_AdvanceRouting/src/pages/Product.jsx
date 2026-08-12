import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-center gap-10">
        <Link className="bg-emerald-950 px-5 py-3 rounded hover:bg-emerald-900 duration-300 active:scale-95" to="/product/men">Men's Collection</Link>
        <Link className="bg-emerald-950 px-5 py-3 rounded hover:bg-emerald-900 duration-300 active:scale-95" to="/product/women">Women's Collection</Link>
        <Link className="bg-emerald-950 px-5 py-3 rounded hover:bg-emerald-900 duration-300 active:scale-95" to="/product/kids">Kids Collection</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Product;

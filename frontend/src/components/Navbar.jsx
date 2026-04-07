import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  const [dropMenu, setDropMenu] = useState(false);
  return (
    <nav className="bg-black text-white px-8 py-4 h-20 flex items-center shadow-2xl">
      <div className="flex items-center flex-1">
        <Link to="/" className="flex items-center flex-1">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="h-10 w-10 border-2 border-red-500 rounded-full"
          />
          <h1 className="text-xl font-bold ml-2">Book Store</h1>
        </Link>
      </div>

      <div className="flex-1 flex justify-center">
        <Link to="/" className="mr-4 hover:text-gray-400">
          Home
        </Link>
        <Link to="/books" className="mr-4 hover:text-gray-400">
          Books
        </Link>
        <Link to="/about" className="hover:text-gray-400">
          About
        </Link>
      </div>

      <div className="flex-1 flex justify-end">
        <VscAccount
          className="text-2xl hover:text-gray-400 cursor-pointer"
          onClick={() => setDropMenu((prev) => !prev)}
        />
      </div>
      {dropMenu && (
        <div className="absolute right-10 top-15 bg-white text-black p-4 rounded shadow">
          <p>Profile</p>
          <p>Logout</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

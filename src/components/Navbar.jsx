import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center sm:px-16 px-8 py-4 max-w-5xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0 gap-2">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">JK</p>

      </NavLink>
      
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-500" : "text-black" }>
          Projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-500" : "text-black" }>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
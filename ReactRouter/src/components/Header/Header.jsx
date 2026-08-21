import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const navLinkClass = ({ isActive }) =>
    `relative text-base font-medium transition-colors duration-200 ${
      isActive ? "text-orange-500" : "text-gray-300 hover:text-orange-400"
    }`;

  return (
    <header className="w-full bg-black border-b border-gray-800 px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="left">
        <img
          src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
          className="h-14 w-auto"
          alt="Logo"
        />
      </div>

      {/* Navigation */}
      <nav className="center flex items-center gap-8">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>

        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>

        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>

        <NavLink to="/github" className={navLinkClass}>
          Github
        </NavLink>

        <NavLink to={`/user/${Math.floor(Math.random()*100)}`} className={navLinkClass}>
          User
        </NavLink>
      </nav>

      {/* Actions */}
      <div className="right flex items-center gap-3">
        <button className="px-5 py-2 rounded-lg border border-orange-500 text-orange-500 text-sm font-medium transition-all duration-200 hover:bg-orange-500 hover:text-black">
          Login
        </button>

        <button className="px-5 py-2 rounded-lg bg-orange-500 text-black text-sm font-semibold transition-all duration-200 hover:bg-orange-400 hover:scale-105">
          Get Started
        </button>
      </div>
    </header>
  );
}

export default Header;

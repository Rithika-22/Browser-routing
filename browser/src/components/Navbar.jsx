import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      <ul className="navbar_links">
        <li className="nav_link"><Link className="nav_links" to="/home">Home</Link></li>

        <li className="nav_link"><Link className="nav_links" to="/about">About</Link></li>
        <li className="nav_link"><Link className="nav_links" to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
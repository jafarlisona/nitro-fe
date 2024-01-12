import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 480 ? setStickyNav(true) : setStickyNav(false);
    }
  };
  return (
    <nav className={stickyNav ? "sticky-nav" : null}>
      <div className="navbar">
        <div className="logo">
          <h1>Nitro.</h1>
        </div>
        <div className="pages">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/add-page">Add</NavLink>
          <Link to="#">Services</Link>
          <Link to="#">About</Link>
          <Link to="#">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

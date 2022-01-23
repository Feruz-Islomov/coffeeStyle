import React from "react";
import ScrollToTop from "react-scroll-to-top";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
  const location = useLocation();
  return (
    <div id="home" className="navbar">
      <ScrollToTop smooth color="blue" style={{ textAlign: "center" }} />
      <div>
        <Link to="/">
          <img className="logo" src="\photo\pl1.png" alt="pizzaHut" />
        </Link>
      </div>

      <div className="navright">
        <Link to="/">Firuz: 998 933 488 522</Link>
        <Link to="/">Menu</Link>
        {location.pathname === "/" && (
          <AnchorLink href="/contact">Contact</AnchorLink>
        )}
        <Link to="/productmanage">Admin</Link>
      </div>
    </div>
  );
};

export default NavBar;

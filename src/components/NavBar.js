import React from "react";
import ScrollToTop from "react-scroll-to-top";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {
  return (
    <div id="home" className="navbar">
      <ScrollToTop smooth color="blue" />
      <div>
        <a href="/">
          <img className="logo" src=".\photo\pl1.png" alt="pizzaHut" />
        </a>
      </div>

      <div className="navright">
        <AnchorLink href="/home">Home</AnchorLink>
        <AnchorLink offset="8" href="/menubar">
          Menu
        </AnchorLink>
        <AnchorLink href="/contact">Contact</AnchorLink>
        <AnchorLink href="/contact">Firuz: 998 933 488 522</AnchorLink>
      </div>
    </div>
  );
};

export default NavBar;

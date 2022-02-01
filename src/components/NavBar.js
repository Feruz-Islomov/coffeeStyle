import React from "react";
import ScrollToTop from "react-scroll-to-top";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Auth from "../Auth";

const NavBar = () => {
  const location = useLocation();
  const auth = Auth.isAuthenticated();
  return (
    <div id="home" className="navbar">
      <ScrollToTop smooth color="blue" style={{ textAlign: "center" }} />
      <div>
        <Link to="/">
          <img className="logo" src="\photo\pl1.png" alt="pizzaHut" />
        </Link>
      </div>

      <div className="navright">
        <Link to="/">Firuz: 998 93 3488522</Link>
        <Link to="/">Menu</Link>
        {location.pathname === "/" && (
          <AnchorLink href="/contact">Contact</AnchorLink>
        )}

        {auth ? (
          <>
            <Link to="/productmanage">Admin</Link>
            <Link
              to="/"
              onClick={() =>
                Auth.logout(() => {
                  localStorage.removeItem("jwt");
                })
              }
            >
              Logout
            </Link>
            {/* <Link to="/">Register</Link> */}
          </>
        ) : !auth ? (
          <Link to="/login">Admin</Link>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;

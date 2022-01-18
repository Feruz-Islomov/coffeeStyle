import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const MenuBar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-quart",
    });
  });
  return (
    <div id="menubar" className="menubar" data-aos="slide-down">
      <div>
        <img className="micon" src=".\photo\p12.png" alt="pizzaHut" />
        <Link to="/">Pizza</Link>
      </div>
      <div>
        <img className="micon" src=".\photo\burger2.png" alt="pizzaHut" />
        <Link to="/burger">Burger</Link>
      </div>
      <div>
        <img className="micon" src=".\photo\s2.png" alt="pizzaHut" />
        <Link to="/sauce">Sauce</Link>
      </div>
      <div>
        <img className="micon" src=".\photo\cake.png" alt="pizzaHut" />
        <Link to="/dessert">Dessert</Link>
      </div>
      <div>
        <img className="micon" src=".\photo\coffee.png" alt="pizzaHut" />
        <Link to="/drink">Drink</Link>
      </div>
    </div>
  );
};

export default MenuBar;

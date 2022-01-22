import BurgerCard from "./Cards/BurgerCard";
import DessertCard from "./Cards/DessertCard";
import DrinkCard from "./Cards/DrinkCard";
import PizzaCard from "./Cards/PizzaCard";
import SauceCard from "./Cards/SauceCard";
import { useEffect, useState } from "react";
import Aos from "aos";

const MenuBodyCards = (props) => {
  const { products } = props;
  const [n, setN] = useState(1);
  const showbody = () => {
    if (n === 1) {
      return <PizzaCard pizza={products.pizza} />;
    } else if (n === 2) {
      return <BurgerCard burger={products.burger} />;
    } else if (n === 3) {
      return <SauceCard sauce={products.sauce} />;
    } else if (n === 4) {
      return <DessertCard dessert={products.dessert} />;
    } else if (n === 5) {
      return <DrinkCard drink={products.drink} />;
    }
  };
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-out-quart",
    });
  });
  return (
    <>
      <div className="menubar" data-aos="slide-down">
        <div>
          <img className="micon" src=".\photo\p12.png" alt="pizzaHut" />
          <div onClick={() => setN(1)}>Pizza</div>
        </div>
        <div>
          <img className="micon" src=".\photo\burger2.png" alt="pizzaHut" />
          <div onClick={() => setN(2)}>Burger</div>
        </div>
        <div>
          <img className="micon" src=".\photo\s2.png" alt="pizzaHut" />
          <div onClick={() => setN(3)}>Sauce</div>
        </div>
        <div>
          <img className="micon" src=".\photo\cake.png" alt="pizzaHut" />
          <div onClick={() => setN(4)}>Dessert</div>
        </div>
        <div>
          <img className="micon" src=".\photo\coffee.png" alt="pizzaHut" />
          <div onClick={() => setN(5)}>Drink</div>
        </div>
      </div>
      {products ? <div className="menubody"> {showbody()}</div> : null}
    </>
  );
};

export default MenuBodyCards;

import BurgerCard from "./Cards/BurgerCard";
import DessertCard from "./Cards/DessertCard";
import DrinkCard from "./Cards/DrinkCard";
import PizzaCard from "./Cards/PizzaCard";
import SauceCard from "./Cards/SauceCard";
import { useState } from "react";
import Contact from "./Contact";
import { url } from "./Api/Api";
import Vacancy from "./Vacancy";

const MenuBodyCards = (props) => {
  const { everything, vacants } = props;
  const menus = everything.menus;
  const products = everything.products;
  const [n, setN] = useState(0);
  const showbody = () => {
    if (n === 0) {
      return <PizzaCard pizza={products.pizza} />;
    } else if (n === 1) {
      return <BurgerCard burger={products.burger} />;
    } else if (n === 2) {
      return <SauceCard sauce={products.sauce} />;
    } else if (n === 3) {
      return <DessertCard dessert={products.dessert} />;
    } else if (n === 4) {
      return <DrinkCard drink={products.drink} />;
    }
  };

  return (
    <>
      {menus && (
        <>
          <div className="menubar">
            {menus.map((menu, n) => {
              return (
                <div key={n}>
                  <img
                    className="micon"
                    src={`${url}/${menu.img}`}
                    alt={menu.name}
                  />
                  <div onClick={() => setN(n)}>{menu.name}</div>
                </div>
              );
            })}
          </div>
          <div className="menubody"> {showbody()}</div>
        </>
      )}
      <Vacancy vacants={vacants} />
      <Contact />
    </>
  );
};

export default MenuBodyCards;

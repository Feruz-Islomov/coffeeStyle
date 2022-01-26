import BurgerCard from "./Cards/BurgerCard";
import DessertCard from "./Cards/DessertCard";
import DrinkCard from "./Cards/DrinkCard";
import PizzaCard from "./Cards/PizzaCard";
import SauceCard from "./Cards/SauceCard";
import { useState } from "react";
import Contact from "./Contact";
import { url } from "./Api/Api";

const MenuBodyCards = (props) => {
  const { mdata, pdata, bdata, sdata, dedata, drdata } = props;
  // console.log(menus);
  // const products = data.products;
  const menus = mdata;
  const [n, setN] = useState(0);
  const showbody = () => {
    if (n === 0) {
      return <PizzaCard pizza={pdata} />;
    } else if (n === 1) {
      return <BurgerCard burger={bdata} />;
    } else if (n === 2) {
      return <SauceCard sauce={sdata} />;
    } else if (n === 3) {
      return <DessertCard dessert={dedata} />;
    } else if (n === 4) {
      return <DrinkCard drink={drdata} />;
    }
  };

  return (
    <>
      {mdata && (
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
      <Contact />
    </>
  );
};

export default MenuBodyCards;

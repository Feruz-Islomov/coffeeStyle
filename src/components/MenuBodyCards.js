import BurgerCard from "./Cards/BurgerCard";
import DessertCard from "./Cards/DessertCard";
import DrinkCard from "./Cards/DrinkCard";
import PizzaCard from "./Cards/PizzaCard";
import SauceCard from "./Cards/SauceCard";
import { Route } from "react-router-dom";

const MenuBodyCards = (props) => {
  const { products } = props;
  return (
    <>
      {products ? (
        <div className="menubody">
          <Route
            path="/"
            exact
            render={(props) => <PizzaCard {...props} pizza={products.pizza} />}
          />
          <Route
            path="/burger"
            render={(props) => (
              <BurgerCard {...props} burger={products.burger} />
            )}
          />
          <Route
            path="/sauce"
            render={(props) => <SauceCard {...props} sauce={products.sauce} />}
          />
          <Route
            path="/dessert"
            render={(props) => (
              <DessertCard {...props} dessert={products.dessert} />
            )}
          />
          <Route
            path="/drink"
            render={(props) => <DrinkCard {...props} drink={products.drink} />}
          />
        </div>
      ) : null}
    </>
  );
};

export default MenuBodyCards;

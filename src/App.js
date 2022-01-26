import { useCallback, useEffect, useState } from "react";
import MenuBodyCards from "./components/MenuBodyCards";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductManage from "./components/ProductManage";
import Form from "./components/Forms/Form";
import {
  getMenus,
  getPizza,
  getBurger,
  getSauce,
  getDessert,
  getDrink,
} from "./components/Api/Api";
// import data from "./data.js";

// const localdata = JSON.parse(localStorage.getItem("coffeeMenuData")) || false;
function App() {
  // const [everything, setEverything] = useState(false);
  const [menus, setMenus] = useState();
  const [pizza, setPizza] = useState();
  const [burger, setBurger] = useState();
  const [sauce, setSauce] = useState();
  const [dessert, setDessert] = useState();
  const [drink, setDrink] = useState();

  //fetch data from backend

  useEffect(() => {
    getMenus()
      .then((res) => {
        setMenus(res.data);
      })
      .catch((err) => console.log(err));
  }, [menus]);
  useEffect(() => {
    getPizza()
      .then((res) => {
        setPizza(res.data);
      })
      .catch((err) => console.log(err));
  }, [pizza]);
  useEffect(() => {
    getBurger()
      .then((res) => {
        setBurger(res.data);
      })
      .catch((err) => console.log(err));
  }, [burger]);
  useEffect(() => {
    getSauce()
      .then((res) => {
        setSauce(res.data);
      })
      .catch((err) => console.log(err));
  }, [sauce]);
  useEffect(() => {
    getDessert()
      .then((res) => {
        setDessert(res.data);
      })
      .catch((err) => console.log(err));
  }, [dessert]);
  useEffect(() => {
    getDrink()
      .then((res) => {
        setDrink(res.data);
      })
      .catch((err) => console.log(err));
  }, [drink]);

  //localStorage
  // useEffect(() => {
  //   localStorage.setItem("coffeeMenuData", JSON.stringify(everything));
  // }, [everything]);

  return (
    <div className="app">
      <div className="choco"></div>
      <Router>
        <NavBar />
        <Route
          exact
          path="/"
          render={(props) => (
            <MenuBodyCards
              {...props}
              mdata={menus}
              pdata={pizza}
              bdata={burger}
              sdata={sauce}
              dedata={dessert}
              drdata={drink}
            />
          )}
        />
        <Route
          exact
          path="/productmanage"
          render={(props) => (
            <ProductManage
              {...props}
              mdata={menus}
              pdata={pizza}
              bdata={burger}
              sdata={sauce}
              dedata={dessert}
              drdata={drink}
            />
          )}
        />
        <Route exact path="/form/:id" render={(props) => <Form {...props} />} />
      </Router>
    </div>
  );
}

export default App;
// const [w, setW] = useState();
// useEffect(() => {
//   let allpizza = [];
//   let allburger = [];
//   let allsauce = [];
//   let alldessert = [];
//   let alldrink = [];
//   function addCat() {
//     data.products.pizza.forEach((item) => {
//       allpizza.push({ ...item, category: "pizza", menu: "pizza" });
//     });
//     data.products.burger.forEach((item) => {
//       allburger.push({ ...item, category: "other", menu: "burger" });
//     });
//     data.products.sauce.forEach((item) => {
//       allsauce.push({ ...item, category: "other", menu: "sauce" });
//     });
//     data.products.dessert.forEach((item) => {
//       alldessert.push({ ...item, category: "other", menu: "dessert" });
//     });
//     data.products.drink.forEach((item) => {
//       alldrink.push({ ...item, category: "other", menu: "drink" });
//     });
//     setW({
//       pizza: allpizza,
//       burger: allburger,
//       sauce: allsauce,
//       dessert: alldessert,
//       drink: alldrink,
//     });
//   }
//   addCat();

//   // setW({});
//   fetch("/api/posting", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(w),
//   })
//     .then((res) => res.json())
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
//   console.log(w);
// }, []);

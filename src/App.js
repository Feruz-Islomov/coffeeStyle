import { useEffect, useState } from "react";
import MenuBodyCards from "./components/MenuBodyCards";
import NavBar from "./components/NavBar";
import data from "./data";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductManage from "./components/ProductManage";
import Form from "./components/Forms/Form";

const localdata = JSON.parse(localStorage.getItem("coffeeMenuData")) || false;
function App() {
  const [products, setProducts] = useState(localdata);
  // console.log(Boolean(1));
  useEffect(() => {
    setProducts(data);
    localStorage.setItem("coffeeMenuData", JSON.stringify(products));
  }, [products]);
  console.log(products); //fisrt undefined
  return (
    <div className="app">
      <div className="choco"></div>
      <Router>
        <NavBar />
        <Route
          exact
          path="/"
          render={(props) => <MenuBodyCards {...props} products={products} />}
        />
        <Route
          exact
          path="/productmanage"
          render={(props) => <ProductManage {...props} data={products} />}
        />
        <Route exact path="/form/:id" render={(props) => <Form {...props} />} />
      </Router>
    </div>
  );
}

export default App;
// import { v4 as uuidv4 } from "uuid";
// import Axios from "axios";
// const [w, setW] = useState();
// useEffect(() => {
// let everything = [];
// function withid() {
//   return data.menus.forEach((item) => {
//     let eachitem = { id: uuidv4(), ...item };
//     everything.push(eachitem);
//   });
// }
// withid();
// setW(everything);
// Axios.post("http://localhost:5000/posting", w)
//   .then(() => console.log("posted!"))
//   .catch((err) => console.log(err));
// let allpizza = [];
// let allburger = [];
// let allsauce = [];
// let alldessert = [];
// let alldrink = [];
// function forexample() {
//   data.products.pizza.forEach((item) => {
//     const newcard = { id: uuidv4(), ...item };
//     allpizza.push(newcard);
//   });
//   data.products.burger.forEach((item) => {
//     const newcard = { id: uuidv4(), ...item };
//     allburger.push(newcard);
//   });
//   data.products.sauce.forEach((item) => {
//     const newcard = { id: uuidv4(), ...item };
//     allsauce.push(newcard);
//   });
//   data.products.dessert.forEach((item) => {
//     const newcard = { id: uuidv4(), ...item };
//     alldessert.push(newcard);
//   });
//   data.products.drink.forEach((item) => {
//     const newcard = { id: uuidv4(), ...item };
//     alldrink.push(newcard);
//   });
// }
// forexample();
// setW({
//   pizza: [...allpizza],
//   burger: [...allburger],
//   sauce: [...allsauce],
//   dessert: [...alldessert],
//   drink: [...alldrink],
// });
// Axios.post("http://localhost:5000/posting", w)
//   .then(() => console.log("posted!"))
//   .catch((err) => console.log(err));
// }, []);

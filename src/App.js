import { useEffect, useState } from "react";
import MenuBodyCards from "./components/MenuBodyCards";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ProductManage from "./components/ProductManage";
import Form from "./components/Forms/Form";
import { url } from "./components/Api/Api";
import FormLogin from "./components/Forms/FormLogin";
import FormRegister from "./components/Forms/FormRegister";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Axios from "axios";

const localdata = JSON.parse(localStorage.getItem("everything")) || false;
function App() {
  const [everything, setEverything] = useState(localdata);
  const [vacants, setvacants] = useState(false);
  //fetch data from backend
  const fetching = async () => {
    try {
      const { data } = await Axios.get(url + "/api/menus");
      var menus = data;
    } catch (err) {
      console.log(err);
    }
    try {
      const { data } = await Axios.get(url + "/api/pizza");
      var pizza = data;
    } catch (err) {
      console.log(err);
    }
    try {
      const { data } = await Axios.get(url + "/api/burger");
      var burger = data;
    } catch (err) {
      console.log(err);
    }
    try {
      const { data } = await Axios.get(url + "/api/sauce");
      var sauce = data;
    } catch (err) {
      console.log(err);
    }
    try {
      const { data } = await Axios.get(url + "/api/dessert");
      var dessert = data;
    } catch (err) {
      console.log(err);
    }
    try {
      const { data } = await Axios.get(url + "/api/drink");
      var drink = data;
    } catch (err) {
      console.log(err);
    }
    try {
      const { data } = await Axios.get(url + "/api/vacancy");
      setvacants(data);
    } catch (err) {
      console.log(err);
    }
    const datas = {
      menus: menus,
      products: {
        pizza: pizza,
        burger: burger,
        sauce: sauce,
        dessert: dessert,
        drink: drink,
      },
    };
    setEverything(datas);
    localStorage.setItem("everything", JSON.stringify(datas));
  };
  useEffect(() => {
    fetching();
  }, []);

  return (
    <div className="app">
      <div className="choco"></div>
      <Router>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <MenuBodyCards
                {...props}
                vacants={vacants}
                everything={everything}
              />
            )}
          />
          <ProtectedRoute
            exact
            path="/productmanage"
            component={() => (
              <ProductManage
                everything={everything}
                vacants={vacants}
                fetching={fetching}
              />
            )}
          />
          <ProtectedRoute
            exact
            path="/form/:id"
            component={(props) => <Form {...props} fetching={fetching} />}
          />
          <ProtectedRoute
            exact
            path="/register"
            component={(props) => (
              <FormRegister {...props} fetching={fetching} />
            )}
          />
          <Route
            exact
            path="/login"
            render={(props) => <FormLogin {...props} />}
          />
          <Route
            exact
            path="*"
            component={() => (
              <Redirect
                to={{
                  pathname: "/",
                }}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

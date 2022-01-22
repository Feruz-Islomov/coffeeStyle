import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import MenuBodyCards from "./components/MenuBodyCards";
import NavBar from "./components/NavBar";
import data from "./data";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductManage from "./components/ProductManage";
import Form from "./components/Form";

function App() {
  const [products, setProducts] = useState();
  useEffect(() => {
    setProducts(data.products);
  }, []);
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
          render={(props) => <ProductManage {...props} products={products} />}
        />
        <Route exact path="/form/:id" render={() => <Form />} />
      </Router>

      <Contact />
    </div>
  );
}

export default App;

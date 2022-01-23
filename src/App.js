import { useEffect, useState } from "react";
import MenuBodyCards from "./components/MenuBodyCards";
import NavBar from "./components/NavBar";
import data from "./data";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductManage from "./components/ProductManage";
import Form from "./components/Forms/Form";

function App() {
  const [products, setProducts] = useState();
  useEffect(() => {
    setProducts(data);
  }, []);

  console.log(products);
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

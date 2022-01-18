import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import MenuBar from "./components/MenuBar";
import MenuBodyCards from "./components/MenuBodyCards";
import NavBar from "./components/NavBar";
import data from "./data";
import { BrowserRouter as Router } from "react-router-dom";

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
        <MenuBar />
        <MenuBodyCards products={products} />
        <Contact />
      </Router>
    </div>
  );
}

export default App;

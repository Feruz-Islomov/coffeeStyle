import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

const FormAdd = () => {
  const history = useHistory();
  const [img, setImg] = useState("");
  const refimg = useRef();
  const [name, setName] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [sprice, setSprice] = useState("");
  const [mprice, setMprice] = useState("");
  const [lprice, setLprice] = useState("");
  const [menu, setMenu] = useState("");

  const upload = (e) => {
    e.preventDefault();
    let data;
    if (category === "other") {
      data = {
        img: img,
        name: name,
        ingredient: ingredient,
        category: category,
        price: price,
        menu: menu,
      };
    } else if (category === "pizza") {
      data = {
        img: img,
        name: name,
        ingredient: ingredient,
        category: category,
        sprice: sprice,
        mprice: mprice,
        lprice: lprice,
        menu: menu,
      };
    }
    console.log(data);
    setName("");
    setIngredient("");
    setCategory("");
    setPrice("");
    setSprice("");
    setMprice("");
    setLprice("");
    setMenu("");
    refimg.current.value = "";
  };

  return (
    <div>
      <button onClick={() => history.push("/productmanage")} className="btn">
        back to Manage products
      </button>
      <div className="wrapper">
        <div className="title">Add Product</div>
        <form className="form" onSubmit={upload}>
          <div className="inputfield">
            <label>Photo</label>
            <input
              type="file"
              onChange={(e) => setImg(e.target.files[0])}
              ref={refimg}
              className="input"
              required
            />
          </div>
          <div className="inputfield">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
              required
            />
          </div>
          <div className="inputfield">
            <label>Ingredients</label>
            <input
              type="text"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
              className="input"
              required
            />
          </div>
          <div className="inputfield">
            <label>Category</label>
            <div className="custom_select">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>select category</option>
                <option value="other">other</option>
                <option value="pizza">pizza</option>
              </select>
            </div>
          </div>
          {category === "pizza" ? (
            <>
              <div className="inputfield">
                <label>Small price</label>
                <input
                  type="number"
                  value={sprice}
                  onChange={(e) => setSprice(e.target.value)}
                  className="input"
                  required
                />
              </div>
              <div className="inputfield">
                <label>Medium price</label>
                <input
                  type="number"
                  value={mprice}
                  onChange={(e) => setMprice(e.target.value)}
                  className="input"
                  required
                />
              </div>
              <div className="inputfield">
                <label>Large price</label>
                <input
                  type="number"
                  value={lprice}
                  onChange={(e) => setLprice(e.target.value)}
                  className="input"
                  required
                />
              </div>
            </>
          ) : (
            <div className="inputfield">
              <label>Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="input"
                required
              />
            </div>
          )}
          <div className="inputfield">
            <label>Menu</label>
            <div className="custom_select">
              <select value={menu} onChange={(e) => setMenu(e.target.value)}>
                <option>select menu</option>
                <option value="Pizza">Pizza</option>
                <option value="Burger">Burger</option>
                <option value="Sauce">Sauce</option>
                <option value="Dessert">Dessert</option>
                <option value="Drink">Drink</option>
              </select>
            </div>
          </div>
          <div className="inputfield">
            <input type="submit" className="inputbtn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormAdd;

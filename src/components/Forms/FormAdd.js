import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { postProduct } from "../Api/Api";
import { v4 as uuidv4 } from "uuid";

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
    const formData = new FormData();

    if (category === "other") {
      formData.append("id", uuidv4());
      formData.append("img", img);
      formData.append("name", name);
      formData.append("ingredient", ingredient);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("menu", menu);
    } else if (category === "pizza") {
      formData.append("id", uuidv4());
      formData.append("img", img);
      formData.append("name", name);
      formData.append("ingredient", ingredient);
      formData.append("category", category);
      formData.append("sprice", sprice);
      formData.append("mprice", mprice);
      formData.append("lprice", lprice);
      formData.append("menu", menu);
    }
    postProduct(formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
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
                <option value="pizza">Pizza</option>
                <option value="burger">Burger</option>
                <option value="sauce">Sauce</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drink</option>
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

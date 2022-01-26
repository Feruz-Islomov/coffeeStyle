import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { updateProduct } from "../Api/Api";

const FormEditProduct = (props) => {
  const item = props.location.state.item;

  const history = useHistory();
  const [img, setImg] = useState(item.img);
  const refimg = useRef();
  const [name, setName] = useState(item.name);
  const [ingredient, setIngredient] = useState(item.ingredient);
  const [price, setPrice] = useState(item.price);
  const [sprice, setSprice] = useState(item.sprice);
  const [mprice, setMprice] = useState(item.mprice);
  const [lprice, setLprice] = useState(item.lprice);
  const [menu, setMenu] = useState(item.menu);

  const update = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (item.category === "other") {
      formData.append("id", item.id);
      formData.append("img", img);
      formData.append("name", name);
      formData.append("ingredient", ingredient);
      formData.append("price", price);
      formData.append("menu", menu);
    } else if (item.category === "pizza") {
      formData.append("id", item.id);
      formData.append("img", img);
      formData.append("name", name);
      formData.append("ingredient", ingredient);
      formData.append("sprice", sprice);
      formData.append("mprice", mprice);
      formData.append("lprice", lprice);
      formData.append("menu", menu);
    }
    updateProduct(formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setName("");
    setIngredient("");
    setPrice("");
    setSprice("");
    setMprice("");
    setLprice("");
    refimg.current.value = "";
  };

  return (
    <div>
      <button onClick={() => history.push("/productmanage")} className="btn">
        back to product page
      </button>
      <div className="wrapper">
        <div className="title">Edit Product</div>
        <form className="form" onSubmit={update}>
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
            <label>Ingredient</label>
            <input
              type="text"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
              className="input"
              required
            />
          </div>
          {item.category === "pizza" ? (
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
            <input type="submit" value="Update" className="inputbtn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormEditProduct;

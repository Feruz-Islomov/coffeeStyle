import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const FormEditProduct = (props) => {
  const item = props.location.state.item;
  let category;
  if (item.sprice) {
    category = "pizza";
  } else {
    category = "other";
  }

  const history = useHistory();
  const [img, setImg] = useState(item.img);
  const refimg = useRef();
  const [name, setName] = useState(item.name);
  const [ingredient, setIngredient] = useState(item.comment);
  //   const [category, setCategory] = useState("pizza"); //just for
  const [price, setPrice] = useState(item.price);
  const [sprice, setSprice] = useState(item.sprice);
  const [mprice, setMprice] = useState(item.mprice);
  const [lprice, setLprice] = useState(item.lprice);

  const update = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(img);
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
            <input type="submit" value="Update" className="inputbtn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormEditProduct;

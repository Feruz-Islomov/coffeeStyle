import React from "react";
import { useHistory, useParams } from "react-router-dom";

const Form = () => {
  const params = useParams();
  const history = useHistory();
  const showforms = () => {
    if (params.id === "add") {
      return (
        <div>
          <button
            onClick={() => history.push("/productmanage")}
            className="btn"
          >
            back to Manage products
          </button>
          <div className="wrapper">
            <div className="title">Add Product</div>
            <form className="form">
              {/* <form className="form" onSubmit={upload}> */}
              <div className="inputfield">
                <label>Photo</label>
                <input
                  type="file"
                  // onChange={(e) => setImg(e.target.files[0])}
                  // ref={refimg}
                  className="input"
                  required
                />
              </div>
              <div className="inputfield">
                <label>Name</label>
                <input
                  type="text"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                  className="input"
                  required
                />
              </div>
              <div className="inputfield">
                <label>Price</label>
                <input
                  type="number"
                  // value={price}
                  // onChange={(e) => setPrice(e.target.value)}
                  className="input"
                  required
                />
              </div>

              <div className="inputfield">
                <label>Category</label>
                <div className="custom_select">
                  <select
                  // value={category}
                  // onChange={(e) => setCategory(e.target.value)}
                  >
                    <option>select category</option>
                    <option value="burger">burger</option>
                    <option value="pizza">pizza</option>
                    <option value="drink">drink</option>
                  </select>
                </div>
              </div>
              <div className="inputfield">
                <label>Menu</label>
                <div className="custom_select">
                  <select
                  // value={menu}
                  // onChange={(e) => setMenu(e.target.value)}
                  >
                    <option>select menu</option>
                    <option value="McDonalds burgers">McDonalds burgers</option>
                    <option value="Kfc chickens">Kfc chickens</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Bugget burgers">Bugget burgers</option>
                    <option value="Drinks">Drinks</option>
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
    } else if (params.id === "editproduct") {
      return (
        <div>
          <button
            onClick={() => history.push("/productmanage")}
            className="btn"
          >
            back to product page
          </button>
          <div className="wrapper">
            <div className="title">Edit Product</div>
            {/* <form className="form" onSubmit={update}> */}
            <form className="form">
              <div className="inputfield">
                <label>Name</label>
                <input
                  type="text"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                  className="input"
                  required
                />
              </div>
              <div className="inputfield">
                <label>Price</label>
                <input
                  type="number"
                  // value={price}
                  // onChange={(e) => setPrice(e.target.value)}
                  className="input"
                  required
                />
              </div>

              <div className="inputfield">
                <input type="submit" value="Update" className="inputbtn" />
              </div>
            </form>
          </div>
        </div>
      );
    } else if (params.id === "editmenu") {
      return (
        <div>
          <button
            onClick={() => history.push("/productmanage")}
            className="btn"
          >
            back to product manage
          </button>
          <div className="wrapper">
            <div className="title">Edit Menu</div>
            <form className="form">
              {/* <form className="form" onSubmit={update}> */}
              <div className="inputfield">
                <label>Photo</label>
                <input
                  type="file"
                  // onChange={(e) => setImg(e.target.files[0])}
                  // ref={refimg}
                  className="input"
                  required
                />
              </div>
              <div className="inputfield">
                <label>Name</label>
                <input
                  type="text"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                  className="input"
                  required
                />
              </div>

              <div className="inputfield">
                <input type="submit" value="Update" className="inputbtn" />
              </div>
            </form>
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      <br />
      <br />
      {showforms()}
    </div>
  );
};

export default Form;

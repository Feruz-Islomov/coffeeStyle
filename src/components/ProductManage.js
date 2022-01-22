import React from "react";
import { useHistory } from "react-router-dom";

const ProductManage = ({ products }) => {
  const history = useHistory();
  return (
    <div>
      {products ? (
        <div>
          <button className="btn add" onClick={() => history.push("/form/add")}>
            + ADD PRODUCT
          </button>
          <div className="menubar">
            <div>
              <img className="micon" src="\photo\p12.png" alt="pizzaHut" />
              <div>Pizza</div>
              <button
                className="btn"
                onClick={() => history.push("/form/editmenu")}
              >
                EDIT
              </button>
            </div>
          </div>

          <div className="groupedcards">
            {products.pizza.map((item, key) => {
              return (
                <div className="menucard pizza" key={key}>
                  <div>
                    <div className="carditems">
                      <div className="name">{item.name}</div>
                      <img className="meimg" src={item.img} alt={item.name} />
                      <p>{item.comment}</p>
                    </div>
                    <h4 className="price">
                      <i>
                        small: {item.sprice} so'm <br />
                        medium: {item.mprice} so'm <br />
                        large: {item.lprice} so'm
                      </i>
                    </h4>
                  </div>
                  <div className="button">
                    <button
                      className="btn"
                      onClick={() => history.push("/form/editproduct")}
                    >
                      EDIT
                    </button>
                    <button className="btn delete">DELETE</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="menubar">
            <div>
              <img className="micon" src="\photo\burger2.png" alt="pizzaHut" />
              <div>Burger</div>
              <button
                className="btn"
                onClick={() => history.push("/form/editmenu")}
              >
                EDIT
              </button>
            </div>
          </div>
          <div className="groupedcards">
            {products.burger.map((item, key) => {
              return (
                <div className="menucard burger" key={key}>
                  <div>
                    <div className="carditems">
                      <div className="name">{item.name}</div>
                      <img className="meimg" src={item.img} alt={item.name} />
                      <p>{item.comment}</p>
                    </div>
                    <h4 className="price">
                      <i>
                        {item.price} so'm <br /> (cheese + {item.eprice})
                      </i>
                    </h4>
                  </div>
                  <div className="button">
                    <button
                      className="btn"
                      onClick={() => history.push("/form/editproduct")}
                    >
                      EDIT
                    </button>
                    <button className="btn delete">DELETE</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="menubar">
            <div>
              <img className="micon" src="\photo\s2.png" alt="pizzaHut" />
              <div>Sauce</div>
              <button
                className="btn"
                onClick={() => history.push("/form/editmenu")}
              >
                EDIT
              </button>
            </div>
          </div>
          <div className="groupedcards">
            {products.sauce.map((item, key) => {
              return (
                <div className="menucard sauce" key={key}>
                  <div>
                    <div className="carditems">
                      <div className="name">{item.name}</div>
                      <img className="meimg" src={item.img} alt={item.name} />
                      <p>{item.comment}</p>
                    </div>
                    <h4 className="price">
                      <i>{item.price} so'm</i>
                    </h4>
                  </div>
                  <div className="button">
                    <button
                      className="btn"
                      onClick={() => history.push("/form/editproduct")}
                    >
                      EDIT
                    </button>
                    <button className="btn delete">DELETE</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="menubar">
            <div>
              <img className="micon" src="\photo\cake.png" alt="pizzaHut" />
              <div>Desert</div>
              <button
                className="btn"
                onClick={() => history.push("/form/editmenu")}
              >
                EDIT
              </button>
            </div>
          </div>

          <div className="groupedcards">
            {products.dessert.map((item, key) => {
              return (
                <div className="menucard dessert" key={key}>
                  <div>
                    <div className="carditems">
                      <div className="name">{item.name}</div>
                      <img className="meimg" src={item.img} alt={item.name} />
                      <p>{item.comment}</p>
                    </div>
                    <h4 className="price">
                      <i>{item.price} so'm</i>
                    </h4>
                  </div>
                  <div className="button">
                    <button
                      className="btn"
                      onClick={() => history.push("/form/editproduct")}
                    >
                      EDIT
                    </button>
                    <button className="btn delete">DELETE</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="menubar">
            <div>
              <img className="micon" src="\photo\coffee.png" alt="pizzaHut" />
              <div>Drink</div>
              <button
                className="btn"
                onClick={() => history.push("/form/editmenu")}
              >
                EDIT
              </button>
            </div>
          </div>
          <div className="groupedcards">
            {products.drink.map((item, key) => {
              return (
                <div className="menucard drink" key={key}>
                  <div>
                    <div className="carditems">
                      <div className="name">{item.name}</div>
                      <img className="meimg" src={item.img} alt={item.name} />
                      <p>{item.comment}</p>
                    </div>
                    <h4 className="price">
                      <i>{item.price} so'm</i>
                    </h4>
                  </div>
                  <div className="button">
                    <button
                      className="btn"
                      onClick={() => history.push("/form/editproduct")}
                    >
                      EDIT
                    </button>
                    <button className="btn delete">DELETE</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductManage;

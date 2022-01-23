import React from "react";
import { Link, useHistory } from "react-router-dom";

const ProductManage = (props) => {
  const { data } = props;
  const products = data.products;
  const menus = data.menus;

  const history = useHistory();
  return (
    <div>
      {data ? (
        <div>
          <button className="btn add" onClick={() => history.push("/form/add")}>
            + ADD PRODUCT
          </button>
          <div className="menubar">
            <div>
              <img className="micon" src={menus[0].img} alt={menus[0].name} />
              <div>{menus[0].name}</div>
              <Link to={{ pathname: "/form/editmenu", state: menus[0] }}>
                <button className="btn">EDIT</button>
              </Link>
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
                    <Link
                      to={{ pathname: "/form/editproduct", state: { item } }}
                    >
                      <button className="btn">EDIT</button>
                    </Link>
                    <button className="btn delete">DELETE</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="menubar">
            <div>
              <img className="micon" src={menus[1].img} alt={menus[1].name} />
              <div>{menus[1].name}</div>
              <Link to={{ pathname: "/form/editmenu", state: menus[1] }}>
                <button className="btn">EDIT</button>
              </Link>
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
                    <Link
                      to={{ pathname: "/form/editproduct", state: { item } }}
                    >
                      <button className="btn">EDIT</button>
                    </Link>
                    <button className="btn delete">DELETE</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="menubar">
            <div>
              <img className="micon" src={menus[2].img} alt={menus[2].name} />
              <div>{menus[2].name}</div>
              <Link to={{ pathname: "/form/editmenu", state: menus[2] }}>
                <button className="btn">EDIT</button>
              </Link>
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
                    <Link
                      to={{ pathname: "/form/editproduct", state: { item } }}
                    >
                      <button className="btn">EDIT</button>
                    </Link>
                    <button className="btn delete">DELETE</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="menubar">
            <div>
              <img className="micon" src={menus[3].img} alt={menus[3].name} />
              <div>{menus[3].name}</div>
              <Link to={{ pathname: "/form/editmenu", state: menus[3] }}>
                <button className="btn">EDIT</button>
              </Link>
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
                    <Link
                      to={{ pathname: "/form/editproduct", state: { item } }}
                    >
                      <button className="btn">EDIT</button>
                    </Link>
                    <button className="btn delete">DELETE</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="menubar">
            <div>
              <img className="micon" src={menus[4].img} alt={menus[4].name} />
              <div>{menus[4].name}</div>
              <Link to={{ pathname: "/form/editmenu", state: menus[4] }}>
                <button className="btn">EDIT</button>
              </Link>
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
                    <Link
                      to={{ pathname: "/form/editproduct", state: { item } }}
                    >
                      <button className="btn">EDIT</button>
                    </Link>
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

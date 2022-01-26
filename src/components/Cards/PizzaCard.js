import React from "react";
import { url } from "../Api/Api"; // when deployed think about

const PizzaCard = ({ pizza }) => {
  return (
    <>
      {pizza &&
        pizza.map((product, key) => {
          return (
            <div id="pizza" className="menucard pizza" key={key}>
              <div className="carditems">
                <div className="name">{product.name}</div>
                <img
                  className="meimg"
                  src={`${url}/${product.img}`}
                  alt={product.name}
                />
                <div>{product.ingredient}</div>
              </div>
              <div className="price">
                <i>
                  small: {product.sprice} so'm <br />
                  medium: {product.mprice} so'm <br />
                  large: {product.lprice} so'm
                </i>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default PizzaCard;

import React from "react";
import { url } from "../Api/Api";

const DrinkCard = ({ drink }) => {
  return (
    <>
      {drink &&
        drink.map((product, key) => {
          return (
            <div id="drink" className="menucard drink" key={key}>
              <div className="carditems">
                <div className="ice"></div>
                <div className="name">{product.name}</div>
                <img
                  className="meimg"
                  src={`${url}/${product.img}`}
                  alt={product.name}
                />
                <div className="ingredient">{product.ingredient}</div>
              </div>
              <div className="price">
                <i>{product.price} so'm</i>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default DrinkCard;

import React from "react";
import { url } from "../Api/Api";

const BurgerCard = ({ burger }) => {
  return (
    <>
      {burger &&
        burger.map((product, key) => {
          return (
            <div id="burger" className="menucard burger" key={key}>
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
                  {product.price} so'm <br /> (cheese + 2000)
                </i>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default BurgerCard;

import React from "react";
import { url } from "../Api/Api";

const DessertCard = ({ dessert }) => {
  return (
    <>
      {dessert &&
        dessert.map((product, key) => {
          return (
            <div id="dessert" className="menucard dessert" key={key}>
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
                <i>{product.price} so'm</i>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default DessertCard;

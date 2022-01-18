import React from "react";

const PizzaCard = ({ pizza }) => {
  return (
    <>
      {pizza.map((product, key) => {
        return (
          <div id="pizza" className="menucard pizza" key={key}>
            <div className="carditems">
              <div className="name">{product.name}</div>
              <img className="meimg" src={product.img} alt={product.name} />
              <div>{product.comment}</div>
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

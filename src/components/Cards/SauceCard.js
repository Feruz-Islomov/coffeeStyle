import React from "react";

const SauceCard = ({ sauce }) => {
  return (
    <>
      {sauce.map((product, key) => {
        return (
          <div id="sauce" className="menucard sauce" key={key}>
            <div className="carditems">
              <div className="name">{product.name}</div>
              <img className="meimg" src={product.img} alt={product.name} />
              <div>{product.comment}</div>
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

export default SauceCard;

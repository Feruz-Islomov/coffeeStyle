import React from "react";

const BurgerCard = ({ burger }) => {
  return (
    <>
      {burger.map((product, key) => {
        return (
          <div id="burger" className="menucard burger" key={key}>
            <div className="carditems">
              <div className="name">{product.name}</div>
              <img className="meimg" src={product.img} alt={product.name} />
              <div>{product.comment}</div>
            </div>
            <div className="price">
              <i>
                {product.price} so'm <br /> (cheese +{product.eprice})
              </i>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BurgerCard;

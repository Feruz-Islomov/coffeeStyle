import React from "react";
import { url } from "./Api/Api";

const Vacancy = (props) => {
  const { vacants } = props;
  return (
    <div className="vacancies">
      {vacants
        ? vacants.map((vacant, key) => {
            return (
              <div className="vacancy" key={key}>
                <img
                  className="vimg"
                  src={`${url + "/" + vacant.img}`}
                  alt={vacant.name}
                />
                <h3>{vacant.name}</h3>
                <div>
                  <b>Tajriba va Tavsif: </b> {vacant.description}
                </div>
                <p>
                  <b>Ish vaqti:</b> {vacant.time}
                </p>
                <p>
                  <b>Ish haqqi:</b> {vacant.salary} so'm
                </p>
                <p>
                  <b>Tel:</b> +{vacant.tel}
                </p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Vacancy;

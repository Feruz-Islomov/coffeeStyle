import React from "react";
// import { Map, Placemark, YMaps, ZoomControl } from "react-yandex-maps";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div>
        <h1>Contact</h1>
        <h3>Programmer: Firuz</h3>
        <h3>
          Tel(<i>egram</i>): +998 93 348 85 22
        </h3>
        <h3>Adress: Samarkand city, Bulvar district</h3>
        <h3>Adress filial: Samarkand city, Amir temur district</h3>{" "}
      </div>
      {/* <YMaps>
        <Map
          defaultState={{
            center: [39.64586867951609, 66.97508574660718],
            zoom: 14,
            controls: [],
          }}
        >
          <ZoomControl options={{ float: "right" }} />
          <Placemark geometry={[39.64586867951609, 66.97508574660718]} />
        </Map>
      </YMaps> */}
    </div>
  );
};

export default Contact;

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Auth from "../../Auth";
import { postRegister } from "../Api/Api";
import { v4 as uuidv4 } from "uuid";

const FormLogin = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const upload = (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("password", password);
    postRegister({ id: uuidv4, name: name, password: password })
      .then((res) => {
        localStorage.setItem("jwt", JSON.stringify(res.data.jwt));
        Auth.login(() => {
          history.push("/productmanage");
        });
      })
      .catch((err) => alert("Ma'lumot noto'g'ri kiritildi!"));
    setName("");
    setPassword("");
  };

  return (
    <div>
      <div className="wrapper">
        <div className="title">Register</div>
        <form className="form" onSubmit={upload}>
          <div className="inputfield">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
              required
            />
          </div>
          <div className="inputfield">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="inputfield">
            <input type="submit" className="inputbtn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;

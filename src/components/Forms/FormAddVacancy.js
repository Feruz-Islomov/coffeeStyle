import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { postVacant } from "../Api/Api";
import { v4 as uuidv4 } from "uuid";

const FormAddVacancy = (props) => {
  const { fetching } = props;
  const history = useHistory();
  const [img, setImg] = useState("");
  const refimg = useRef();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [salary, setSalary] = useState("");
  const [tel, setTel] = useState("");

  const upload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", uuidv4());
    formData.append("img", img);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("time", time);
    formData.append("salary", salary);
    formData.append("tel", tel);

    postVacant(formData)
      .then((res) => {
        alert(res.data);
        history.push("/productmanage");
      })
      .then(() => fetching());
    setName("");
    setDescription("");
    setTime("");
    setSalary("");
    setTel("");
    refimg.current.value = "";
  };

  return (
    <div>
      <button onClick={() => history.push("/productmanage")} className="btn">
        back to Manage products
      </button>
      <div className="wrapper">
        <div className="title">Add Vacancy</div>
        <form className="form" onSubmit={upload}>
          <div className="inputfield">
            <label>Photo</label>
            <input
              type="file"
              onChange={(e) => setImg(e.target.files[0])}
              ref={refimg}
              className="input"
              required
            />
          </div>
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
            <label>Tajriba va Tavsif:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input"
              required
            />
          </div>
          <div className="inputfield">
            <label>Ish vaqti:</label>
            <input
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="input"
              required
            />
          </div>
          <div className="inputfield">
            <label>Ish haqqi:</label>
            <input
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="input"
              required
            />
          </div>
          <div className="inputfield">
            <label>Tel:</label>
            <input
              type="number"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
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

export default FormAddVacancy;

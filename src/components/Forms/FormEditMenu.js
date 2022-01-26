import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { updatemenu } from "../Api/Api";

const FormEditMenu = (props) => {
  const item = props.location.state;
  const history = useHistory();
  const [img, setImg] = useState();
  const refimg = useRef();
  const [name, setName] = useState(item.name);

  const update = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", item.id);
    formData.append("img", img);
    formData.append("name", name);
    updatemenu(formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    refimg.current.value = "";
    setName("");
  };

  return (
    <div>
      <button onClick={() => history.push("/productmanage")} className="btn">
        back to product manage
      </button>
      <div className="wrapper">
        <div className="title">Edit Menu</div>
        <form className="form" onSubmit={update}>
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
            <input type="submit" value="Update" className="inputbtn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormEditMenu;

import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const FormEditMenu = (props) => {
  const menu = props.location.state;
  const history = useHistory();
  const [img, setImg] = useState();
  const refimg = useRef();
  const [name, setName] = useState(menu.name);

  const update = (e) => {
    e.preventDefault();
    console.log(img);
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

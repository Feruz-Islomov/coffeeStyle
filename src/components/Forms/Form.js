import React from "react";
import { useParams } from "react-router-dom";
import FormAdd from "./FormAdd";
import FormEditMenu from "./FormEditMenu";
import FormEditProduct from "./FormEditProduct";

const Form = (props) => {
  const params = useParams();
  return (
    <div>
      <br />
      <br />
      {params.id === "add" ? (
        <FormAdd />
      ) : params.id === "editproduct" ? (
        <FormEditProduct {...props} />
      ) : params.id === "editmenu" ? (
        <FormEditMenu {...props} />
      ) : null}
    </div>
  );
};

export default Form;

import React from "react";
import { useParams } from "react-router-dom";
import FormAdd from "./FormAdd";
import FormAddVacancy from "./FormAddVacancy";
import FormEditMenu from "./FormEditMenu";
import FormEditProduct from "./FormEditProduct";

const Form = (props) => {
  const { fetching } = props;
  const params = useParams();
  return (
    <div>
      <br />
      <br />
      {params.id === "add" ? (
        <FormAdd fetching={fetching} />
      ) : params.id === "editproduct" ? (
        <FormEditProduct {...props} fetching={fetching} />
      ) : params.id === "editmenu" ? (
        <FormEditMenu {...props} fetching={fetching} />
      ) : params.id === "addvacancy" ? (
        <FormAddVacancy {...props} fetching={fetching} />
      ) : null}
    </div>
  );
};

export default Form;

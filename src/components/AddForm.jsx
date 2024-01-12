import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function AddForm() {
  const navigate = useNavigate();
  function handleSubmit(values) {
    fetch(`http://localhost:3000/services`, {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((x) => navigate("/"));
  }
  return (
    <div className="add">
      <h1>Add Services</h1>
      <Formik
        initialValues={{ title: "", description: "", icon: "" }}
        validationSchema={Yup.object({
          title: Yup.string()
            .min(2, "Must be 2 characters at least")
            .required("Required"),
          description: Yup.string()
            .min(2, "Must be 2 characters at least")
            .required("Required"),
          icon: Yup.string()
            .min(2, "Must be 2 characters at least")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          setSubmitting(false);
        }}
      >
        <Form>
          <div className="form">
            <label htmlFor="title">Title :</label>
            <div className="error-inp">
              <Field name="title" type="text" />
              <ErrorMessage name="title" component="div" />
            </div>
          </div>
          <div className="form">
            <label htmlFor="description">Description :</label>
            <div className="error-inp">
              <Field name="description" type="text" />
              <ErrorMessage name="description" component="div" />
            </div>
          </div>
          <div className="form">
            <label htmlFor="icon">Icon :</label>
            <div className="error-inp">
              <Field name="icon" type="icon" />
              <ErrorMessage name="icon" component="div" />
            </div>
          </div>
          <button type="submit">Add</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddForm;

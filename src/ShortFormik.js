import React from "react";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage, Field } from "formik";

const ShortFormik = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: ""
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Name is Required"),
        email: Yup.string().email().required("Email is required"),
        password: Yup.string()
          .min(6, "Password should atleat 6 char long")
          .required("password is required")
      })}
      onSubmit={(values) => {
        console.log(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="Name"> Name</label>

        <Field name="name" type="text" />

        <ErrorMessage name="name" />

        <label htmlFor="lastName">Email</label>

        <Field name="email" type="email" />

        <ErrorMessage name="email" />

        <label htmlFor="password">Password</label>

        <Field name="password" type="password" />

        <ErrorMessage name="password" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ShortFormik;

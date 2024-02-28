import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues ={
  name:"",
  email:"",
  password:"",
  confirm_password:""

}

const SignupSchema = Yup.Object({
  name:Yup.string().min(2).max(30).required("Name is required"),
  email: Yup.string().email().required("Email is required field"),
  password: Yup.string().min(5).max(20).required("password in required"),
  confirm_password: Yup.string().required().oneOf([Yup.ref("passowrd") ,null] , "password must match")

})

const Registeration = () => {
  const formik = useFormik({
    initialValues ,
    validationSchema: SignupSchema,
  });

  return (
    <>
      <form className="form-content">
        <h1>Sign Up</h1>
        <div>
          <label>Name:</label>
          <br />
          <input type="text" name="name" className="input-field" />
        </div>
        <div>
          <label>
            Email:
            <br />
            <input type="text" name="email" className="input-field" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <br/>
            <input type="text" name="password" className="input-field" />
          </label>
        </div>
        <div>
          <label>
            Confirm Password:
            <br />
            <input type="text" name="confirm_password" className="input-field" />
          </label>
        </div>
        <button className="btn">Save</button>
      </form>
    </>
  );
};

export default Registeration;

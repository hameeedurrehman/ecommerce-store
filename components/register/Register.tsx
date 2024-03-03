"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
});

function Register() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await validationSchema.validate(state);
      const res = await axios.post("/api/userExists", {
        email: state.email,
      });
      const { user } = res.data;
      if (user) {
        setError("User Exists");
      } else {
        await axios.post("/api/register", {
          name: state.name,
          email: state.email,
          password: state.password,
        });
        setState({
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setError(error.message);
      } else {
        console.log(error);
      }
    }
  };
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
      <h2 className="font-bold text-3xl">Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <div>
          <TextField
            type="text"
            name="name"
            color="primary"
            value={state.name}
            onChange={handleChange}
          />
        </div>
        <label>Email</label>
        <div>
          <TextField
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <label>Password</label>
        <div>
          <TextField
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <div className="text-red-700 font-bold">{error && error}</div>
    </div>
  );
}

export default Register;

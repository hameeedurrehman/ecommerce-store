"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";

function Register() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await axios.post("/api/register", {
        name: state.name,
        email: state.email,
        password: state.password,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
      <h2 className="font-bold text-3xl">Register</h2>
      <form>
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
        <button onClick={handleSubmit} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;

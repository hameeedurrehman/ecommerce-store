"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

function Register() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

import React from "react";
import { body, form, formInput, formButton } from "./Login.css";

export const Login = () => {
  return (
    <div className={body}>
      <div className={form}>
        <h1>Sign In</h1>
        <input className={formInput} type="text" placeholder="Username" />
        <input className={formInput} type="password" placeholder="Password" />
        <button className={formButton}>Sign in</button>
      </div>
    </div>
  );
};

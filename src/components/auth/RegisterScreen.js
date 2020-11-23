import React from "react";
import { Link } from "react-router-dom";

import wave from "../../assets/wave.svg";
import wave2 from "../../assets/wave2.svg";

export const RegisterScreen = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className="auth__main">
      <form onSubmit={handleSubmit} className="auth__form" autoComplete="naaa">
        <h1 className="auth__title">Create an account</h1>
        <input
          className="auth__input"
          type="text"
          placeholder="Full Name"
          name="name"
          autoComplete="naaa"
        />

        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="naaa"
        />

        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
        />
        <button className="btn" type="submit">
          Sign up
        </button>

        <div className="auth__not-account">
          <p>Already registered?</p>

          <Link to="/auth/login">Log in</Link>
        </div>
      </form>

      <div className="auth__background-waves">
        <img src={wave} alt="olas" className="auth__wave1" />
        <img src={wave2} alt="olas" className="auth__wave2" />
      </div>
    </div>
  );
};

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { createAccountEmailPassword } from "../../actions/auth";
import { removeError, setError } from "../../actions/ui";

import wave from "../../assets/wave.svg";
import wave2 from "../../assets/wave2.svg";
import { useForm } from "../../hooks/useForm";

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const { ui } = useSelector((state) => state);

  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      console.log("name:" + name, " email: " + email, " pasword: " + password);

      dispatch(createAccountEmailPassword(name, email, password));
    }
  };

  const isFormValid = () => {
    if (name.length < 3) {
      dispatch(setError("Name must be at least 3 char"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Your email is not an email"));
      return false;
    } else if (password.length < 5) {
      return false;
    }
    return true;
  };

  const handleChangeView = () => {
    dispatch(removeError());
  };

  return (
    <div className="auth__main">
      <form onSubmit={handleSubmit} className="auth__form" autoComplete="naaa">
        <h1 className="auth__title">Create an account</h1>
        {ui.error ? (
          <small className="auth__alert-error">{ui.msg}</small>
        ) : null}

        <input
          className="auth__input"
          type="text"
          placeholder="Full Name"
          autoComplete="naaa"
          name="name"
          value={name}
          onChange={handleInputChange}
        />

        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          autoComplete="naaa"
          name="email"
          value={email}
          onChange={handleInputChange}
        />

        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <button className="btn" type="submit">
          Sign up
        </button>

        <div className="auth__not-account" onClick={handleChangeView}>
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

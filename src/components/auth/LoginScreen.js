import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startGoogleLogin } from "../../actions/auth";

import wave from "../../assets/wave.svg";
import wave2 from "../../assets/wave2.svg";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "pepito@gmail.com",
    password: 1234,
  });

  const { email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // dispatch( login(email, password) );
  };

  const handleLoginWithGoogle = () => {
    console.log('google login');

    dispatch( startGoogleLogin() )

  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="auth__form"
        autoComplete="new-password"
      >
        <h1 className="auth__title">Sign in into your account</h1>
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          value={email}
          autoComplete="naaa"
          name="email"
          onChange={handleInputChange}
        />

        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={handleInputChange}
        />
        <button className="btn" type="submit">
          Login
        </button>

        <div className="auth__social-networks">
          <div
            className="google-btn"
            onClick={handleLoginWithGoogle}
            tabIndex="0"
          >
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>

            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <div className="auth__not-account">
          <p>Don't have an account?</p>

          <Link to="/auth/register">Create an account</Link>
        </div>
      </form>

      <div className="auth__background-waves">
        <img src={wave} alt="olas" className="auth__wave1" />
        <img src={wave2} alt="olas" className="auth__wave2" />
      </div>
    </>
  );
};

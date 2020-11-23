import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth";
import wave from "../../assets/wave.svg";
import wave2 from "../../assets/wave2.svg";

export const Landing = () => {
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state);

  const { uid, displayName } = auth;

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="land__main">
      <div className="land__container">
        <h1 className="land__title">Welcome {displayName} you are loggedIn</h1>

        <p className="mb-5 land__subtitle">Your uid is: {uid}</p>

        <button className="btn" onClick={handleLogout}>
          Log out
        </button>
      </div>
      <div className="auth__background-waves">
        <img src={wave} alt="olas" className="auth__wave1" />
        <img src={wave2} alt="olas" className="auth__wave2" />
      </div>
    </div>
  );
};

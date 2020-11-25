import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../actions/auth";
import Lottie from "react-lottie";
import animationData from "../../assets/hacker.json";

export const Landing = () => {
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state);

  const { uid, displayName } = auth;

  const handleLogout = () => {
    dispatch(signOut());
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="land__main">
      <div className="land__container">
        <h1 className="land__title">
          Welcome <span>{displayName}</span> you are logged, congratulations!
        </h1>

        <p className="mb-5 land__subtitle">
          Your uid from Firebase is: <span>{uid} </span>
        </p>

        <div className="land__center">
        <Lottie options={defaultOptions} height={400} width={400} />
        <h2 className="land__center-subtitle">
          This could be you right now
        </h2>

        </div>


        <button className="btn" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
};

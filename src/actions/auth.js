import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/FirebaseConfig";
import { removeError, removeLoading, setError, setLoading } from "./ui";

export const startGoogleLogin = () => {
  return (dispatch) => {

    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(removeError());
      })
      .catch((e) => {
        dispatch(setError(e.message));
      });
  };
};

export const createAccountEmailPassword = (name, email, password) => {
  return (dispatch) => {
    dispatch(setLoading());

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
        dispatch(removeError());
        dispatch(removeLoading());
      })
      .catch((e) => {
        dispatch(setError(e.message));
        dispatch(removeLoading());
      });
  };
};

export const logInWithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    dispatch(setLoading());

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(removeError());
        dispatch(removeLoading());
      })
      .catch((e) => {
        dispatch(setError(e.message));
        dispatch(removeLoading());
      });
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid: uid,
      displayName: displayName,
    },
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch(setLoading());

    firebase.auth().signOut();
    dispatch(logout());
    dispatch(removeLoading());
  };
};

export const logout = () => {
  return {
    type: types.logout,
  };
};

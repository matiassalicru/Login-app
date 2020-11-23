import { types } from "../types/types";
import {firebase, googleAuthProvider} from '../firebase/FirebaseConfig'


export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  }
}

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid: uid,
      displayName: displayName,
    },
  };
};

export const logout = () => {
    return{
        type: types.logout,
    }
}

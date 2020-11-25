import { types } from "../types/types";

export const setError = (msg) => {
  return {
    type: types.setError,
    payload: msg,
  };
};

export const removeError = () => {
  return {
    type: types.removeError,
  };
};

export const setLoading = () => {
    return {
        type: types.setLoading,
    }
};

export const removeLoading = () => {
  return {
    type: types.removeLoading,
  };
};
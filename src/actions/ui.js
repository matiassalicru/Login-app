import { types } from "../types/types"

export const setError = (msg) => {
    return {
        type: types.setError,
        payload: msg,
    }
}

export const removeError = () => {
    return {
        type: types.removeError,
    }
}


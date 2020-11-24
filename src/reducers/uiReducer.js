import { types } from "../types/types";

const initialState = {
    error: false
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.setError:
            return {
                ...state,
                error: true,
                msg: action.payload
            }            

        case types.removeError:
            return {
                error: false,
            }
    
        default:
            return state;
    }
}
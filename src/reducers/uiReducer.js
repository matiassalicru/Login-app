import { types } from "../types/types";

const initialState = {
    loading: false,
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
            };

        case types.setLoading: 
            return {
                ...state,
                loading: true,
            }

        case types.removeLoading:
            return{
                ...state,
                loading: false,
            }
    
        default:
            return state;
    }
}
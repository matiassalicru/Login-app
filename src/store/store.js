import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";


import { authReducer } from "../reducers/authReducer";
import { uiReducer } from "../reducers/uiReducer";

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose; //Para utilizar esto hay que importar compose.

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

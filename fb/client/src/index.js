import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

export default combineReducers({
    auth: authReducer,
    errors: errorReducer
  });
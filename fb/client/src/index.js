import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// import { combineReducers } from "redux";
// import authReducer from "./authReducer";
// import errorReducer from "./errorReducer";

// export default combineReducers({
//   auth: authReducer,
//   errors: errorReducer
// });

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
// import store from "./features/store";  // new redux version
import configureStore from "./oldRedux/store"; // old redux version
import App2 from "./App2";

const store = configureStore(); // for old redux only

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <App2 />
    </Provider>
  </React.StrictMode>
);

// the position of the provide must like this, otherwise it's error

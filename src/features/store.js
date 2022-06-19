import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import counterReducer from "./counter";
import getPostReducer from "./getPost";
import userReducer from "./reducers/userReducers";

// creating custom middleware like expressjs
// this will be super usefull if you want to intercept the api
export const customMiddleware = (store) => (next) => (action) => {
  console.log("Middleware 1");
  console.log("Middleware triggered:", action);

  // modify the payload
  if (action.type === "counterSlice/counting") {
    action.payload = action.payload * 10;
  }

  next(action);
};

export const customMiddleware2 = (store) => (next) => (action) => {
  console.log("Middleware 2");
  next(action);
};

// middleware from redux
const logger = createLogger();

const middleware = [logger, customMiddleware, customMiddleware2]; // this will be executed in order for the custom middleware, idk why the logger is executed last as per logging

const store = configureStore({
  // applying middleware
  middleware: getDefaultMiddleware().concat(middleware),
  devTools: true,
  reducer: {
    counter: counterReducer,
    getPost: getPostReducer,
    user: userReducer,
  },
});

export default store;

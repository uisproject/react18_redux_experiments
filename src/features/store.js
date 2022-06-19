import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { createLogger } from "redux-logger";

import counterReducer from "./counter";
import getPostReducer from "./getPost";
import userReducer from "./reducers/userReducers";
import { userApi } from "./api/userApi";

// creating custom middleware like expressjs
// this will be super usefull if you want to intercept the api
export const customMiddleware = (store) => (next) => (action) => {
  // console.log("Middleware 1");
  // console.log("Middleware triggered:", action);

  // modify the payload
  if (action.type === "counterSlice/counting") {
    action.payload = action.payload * 10;
  }

  next(action);
};

export const customMiddleware2 = (store) => (next) => (action) => {
  // console.log("Middleware 2");
  next(action);
};

// middleware from redux
const logger = createLogger();

const middleware = [logger, customMiddleware, customMiddleware2]; // this will be executed in order for the custom middleware, idk why the logger is executed last as per logging

const apiMiddleware = [userApi.middleware]; // when this api is fulfilled this will create its own state and you can get the object named api

const store = configureStore({
  // applying middleware
  middleware: getDefaultMiddleware().concat([...middleware, ...apiMiddleware]),
  devTools: true,
  reducer: {
    counter: counterReducer,
    getPost: getPostReducer,
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
});

setupListeners(store.dispatch);

export default store;

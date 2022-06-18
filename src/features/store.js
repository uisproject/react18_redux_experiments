import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import getPostReducer from "./getPost";
import userReducer from "./reducers/userReducers";

const store = configureStore({
  // when you add a new reducer make sure to register the object property into utils/selectorName.js too
  reducer: {
    counter: counterReducer,
    getPost: getPostReducer,
    user: userReducer,
  },
});

export default store;

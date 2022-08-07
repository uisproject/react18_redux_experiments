import { combineReducers } from "redux";
import Counter from "./Counter";
import Post from "./Post";

// to store all reducers
const reducer = () => {
  return combineReducers({
    counter: Counter,
    posts: Post,
  });
};

export default reducer;

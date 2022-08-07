import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const midddlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState) => {
  const store = createStore(
    reducers(),
    initialState,
    composeEnhancers(applyMiddleware(...midddlewares))
  );

  return store;
};

export default configureStore;

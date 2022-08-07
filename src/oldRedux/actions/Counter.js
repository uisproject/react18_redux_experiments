import { DECREMENT, INCREMENT } from "../../utils/ActionTypes";

export const increment = (count) => (dispatch) => {
  dispatch({ type: INCREMENT, payload: count });
};

export const decrement = (count) => (dispatch) => {
  dispatch({ type: DECREMENT, payload: count });
};

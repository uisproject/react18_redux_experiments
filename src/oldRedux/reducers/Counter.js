import { DECREMENT, INCREMENT } from "../../utils/ActionTypes";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        count: state.count + action.count.count,
      };
    }
    case DECREMENT: {
      return {
        ...state,
        count: state.count - action.count,
      };
    }
    default:
      return state;
  }
};

export default counterReducer;

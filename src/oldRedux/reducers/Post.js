import {
  GET_POSTS_LOADING,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
} from "../../utils/ActionTypes";

const initialState = {
  posts: [],
  loading: false,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        posts: action.payload.posts,
      };
    }

    case GET_POSTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    default:
      return state;
  }
};

export default postReducer;

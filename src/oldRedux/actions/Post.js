import {
  GET_POSTS_LOADING,
  GET_POSTS_FAILURE,
  GET_POSTS_SUCCESS,
} from "../../utils/ActionTypes";

export const getPost = () => async (dispatch) => {
  try {
    dispatch({ type: GET_POSTS_LOADING });

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    dispatch({ type: GET_POSTS_SUCCESS, payload: { posts } });
  } catch (error) {
    dispatch({ type: GET_POSTS_FAILURE, payload: { error } });
  }
};

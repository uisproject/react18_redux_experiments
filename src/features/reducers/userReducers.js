import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import { addName, deleteUser, getComments } from "../actions/listActions";
import axios from "axios";

const initialState = {
  users: [],
  comments: [],
};

const addNameFunc = (state, { payload }) => {
  state.users.push(payload);
};

const deleteUserFunc = (state, { payload }) => {
  state.users.filter((_, idx) => idx !== payload);
};

export const fetchComments = createAsyncThunk(
  getComments,
  async (payload, thunkAPI) => {
    console.log(thunkAPI);
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );

    return data;
  }
);

const setComments = (state, { payload }) => {
  console.log("called");
  state.comments = payload;
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(addName, addNameFunc);
  builder.addCase(deleteUser, deleteUserFunc);
  builder.addCase(fetchComments.fulfilled, setComments);
});

export default userReducer;

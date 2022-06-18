import { createReducer } from "@reduxjs/toolkit";
import { addName, deleteUser } from "../actions/listActions";

const initialState = {
  users: [],
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(addName, (state, { payload }) => {
    state.users.push(payload);
  });
  builder.addCase(deleteUser, (state, { payload }) => {
    state.users.filter((_, idx) => idx !== payload);
  });
});

export default userReducer;

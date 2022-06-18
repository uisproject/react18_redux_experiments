import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    counting: (state, { payload }) => {
      state.count += payload;
    },
  },
});

export const { counting } = counterSlice.actions;

export default counterSlice.reducer;

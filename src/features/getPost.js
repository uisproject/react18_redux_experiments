import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPost = createAsyncThunk(
  "fetchPost",
  async (payload, thunkAPI) => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return data;
  }
);

const getPostSlice = createSlice({
  name: "getPost",
  initialState: [],

  //   2 version to do extraReducers
  extraReducers: {
    [fetchPost.fulfilled]: (state, { payload }) => {
      return (state = payload);
    },
  },
  //   extraReducers(builder) {
  //     builder.addCase(fetchPost.fulfilled, (state, { payload }) => {
  //       return (state = payload);
  //     });
  //   },
});

export default getPostSlice.reducer;

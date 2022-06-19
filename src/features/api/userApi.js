import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/api";

export const userApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["User"], // important
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      transformResponse: (res) => res.sort((a, b) => b.id - a.id), // you can use this to sort the response or play with the response
      providesTags: ["User"], // this is hella important because this will make the change, since RTK is basically cache the response so when you update the fetch the component will re-render
    }),
    addUsers: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"], // important
    }),
  }),
});

export const { useGetUsersQuery, useAddUsersMutation } = userApi; // the name of userGetUserQuery is created automatically based on the name of the function

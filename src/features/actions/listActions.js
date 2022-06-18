import { createAction } from "@reduxjs/toolkit";

export const addName = createAction("user/addNewUser");
export const deleteUser = createAction("user/deleteUser");
export const getComments = createAction("user/comments");

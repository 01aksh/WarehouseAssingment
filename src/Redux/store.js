import thunkMiddleware from "redux-thunk";
import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

export const store = configureStore({ reducer: reducer });

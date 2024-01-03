import { todoReducer } from "./TodoReducer";
import {legacy_createStore as createStore } from "redux";
export const store = createStore(todoReducer)
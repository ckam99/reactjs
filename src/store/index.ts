import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useDispatch, TypedUseSelectorHook } from "react-redux";
import todoReducer from "./reducers/todoSlice";

const store = configureStore({
  reducer: {
    todoReducer
  }
});

export type State = ReturnType<typeof store.getState>;
export const useContextDispatch = () => useDispatch<typeof store.dispatch>();
export const useContextSelector: TypedUseSelectorHook<State> = useSelector;

export default store;

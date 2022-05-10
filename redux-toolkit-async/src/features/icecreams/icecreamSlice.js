import { createSlice } from "@reduxjs/toolkit";
import { cakeActions } from "../cakes/data/cakeSlice";

const initialState = {
  numOfIcecreams: 10
};
const icecreamSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    }
  },
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numOfIcecreams--;
  //   }
  // }
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIcecreams--;
    });
  }
});

export const icecreamActions = icecreamSlice.actions;

export default icecreamSlice.reducer;

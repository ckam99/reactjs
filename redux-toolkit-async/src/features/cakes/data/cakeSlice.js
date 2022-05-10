import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10
};
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      console.log("cake action: ", action);

      state.numOfCakes += action.payload ?? 1;
    }
  }
});

export const cakeActions = cakeSlice.actions;

export default cakeSlice.reducer;

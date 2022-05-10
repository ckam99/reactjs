import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
  error: ""
};

const base_url = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = createAsyncThunk("user/fetchUsersAsync", () => {
  return axios.get(`${base_url}`).then((response) => response.data);
});

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message;
      });
  }
  // reducers: {
  //   fetchRequest: (state) => {
  //     state.loading = true;
  //   },
  //   fetchFailure: (state, action) => {
  //     state.loading = false;
  //     state.users = [];
  //     state.error = action.payload;
  //   },
  //   fetchSuccess: (state, action) => {
  //     state.loading = false;
  //     state.users = action.payload;
  //   }
  // }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;

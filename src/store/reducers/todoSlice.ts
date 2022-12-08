import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../interfaces/todo";
import {
  addTodo,
  fetchTodos,
  removeTodo,
  updateTodo
} from "../actions/todoAction";

export type todoStateProps = {
  todos: Todo[];
  loading: boolean;
  error: string | null | undefined;
  todo?: Todo;
};

const initialState: todoStateProps = {
  todos: [],
  loading: false,
  error: null
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch todo list
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.todos = [];
        state.error = action.error.message;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
        state.error = null;
      });
    // add todo
    builder
      .addCase(addTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos.push(action.payload);
        state.error = null;
      });

    // update todo
    builder
      .addCase(updateTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.loading = false;
        const todo = state.todos.find((t) => t.id === action.payload.id);
        if (todo) {
          todo.title = action.payload.title;
          todo.completed = action.payload.completed;
        }
        state.error = null;
      });

    //  delete todo
    builder
      .addCase(removeTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = state.todos.filter((t) => t.id === action.payload);
        state.error = null;
      });
  }
});

export default todoSlice.reducer;

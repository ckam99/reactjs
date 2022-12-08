import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodoRequest,
  fetchTodoRequest,
  removeTodoRequest,
  updateTodoRequest
} from "../../api/todoApi";
import { Todo } from "../../interfaces/todo";

export const fetchTodos = createAsyncThunk<Todo[]>("todo/fetchTodos", () => {
  return fetchTodoRequest().then((response) => response.data);
});

export const addTodo = createAsyncThunk<Todo, Todo>(
  "todo/addTodo",
  (todo: Todo) => {
    return addTodoRequest(todo).then((response) => response.data);
  }
);

export const updateTodo = createAsyncThunk<Todo, Todo>(
  "todo/updateTodo",
  (todo: Todo) => {
    return updateTodoRequest(todo).then((response) => response.data);
  }
);

export const removeTodo = createAsyncThunk<number, Todo>(
  "todo/removeTodo",
  (todo: Todo) => {
    removeTodoRequest(todo).then((response) => response.data);
    return todo.id;
  }
);

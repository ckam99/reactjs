import baseApi from "./baseApi";
import { Todo } from "../interfaces/todo";

const baseUrl = "/todos";

export async function fetchTodoRequest() {
  return await baseApi.get(`${baseUrl}`);
}

export async function addTodoRequest(todo: Todo) {
  return await baseApi.post(`${baseUrl}`);
}

export async function updateTodoRequest(todo: Todo) {
  return await baseApi.put(`${baseUrl}/${todo.id}`);
}

export async function removeTodoRequest(todo: Todo) {
  return await baseApi.delete(`${baseUrl}/${todo.id}`);
}

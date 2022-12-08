import React, { useEffect } from "react";
import { useContextSelector, useContextDispatch } from "../store";
import TodoCollection from "../components/TodoCollection";
import { fetchTodos } from "../store/actions/todoAction";

const TodoListView: React.FC = () => {
  const dispatch = useContextDispatch();

  const { todos, loading, error } = useContextSelector(
    (state) => state.todoReducer
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchTodos());
    }, 200);
  }, [dispatch]);

  return (
    <div>
      <h1>Todo list</h1>
      <TodoCollection todos={todos} loading={loading} error={error} />
    </div>
  );
};

export default TodoListView;

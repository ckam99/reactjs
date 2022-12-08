import React from "react";
import { todoStateProps } from "../store/reducers/todoSlice";

const TodoCollection: React.FC<todoStateProps> = (prop) => {
  return (
    <div>
      {prop.loading ? (
        <div>loading...</div>
      ) : prop.error ? (
        <div>{prop.error}</div>
      ) : (
        <>
          {prop.todos.map((todo) => (
            <TodoItem key={todo.id}>
              <div>{todo.title}</div>
            </TodoItem>
          ))}
        </>
      )}
    </div>
  );
};

export default TodoCollection;

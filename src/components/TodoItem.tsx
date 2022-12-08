import * as React from "react";
import { Todo } from "../interfaces/todo";

type Props = {
  todo: Todo;
};
const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <div>
      <div>{todo.title}</div>
    </div>
  );
};

export default TodoItem;

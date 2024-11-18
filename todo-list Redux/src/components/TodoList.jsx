import { useSelector } from "react-redux";
import { Todo } from "./Todo";

export const TodoList = () => {
  const todo = useSelector((state) => state.todo.todo);
  return (
    <>
      <ul>
        {todo.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

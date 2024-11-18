import { GoTrash } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo, toggleTodo } from "../store";
import { ToggleButton } from "./ToggleButton";

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const removeTodo = () => {
    dispatch(deleteTodo(todo.id));
  };
  const toggleCheckbox = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <li>
      <ToggleButton toggleCheckbox={toggleCheckbox} todo={todo} />
      <Link to={`/todo/${todo.id}`} style={{ textDecoration: "none" }}>
        <span
          style={{
            color: todo.checked ? "lightgray" : "black",
          }}
          title="클릭 시 내용을 볼 수 있습니다."
        >
          {todo.title}
        </span>
      </Link>
      <button className="listButton" onClick={removeTodo}>
        <GoTrash />
      </button>
    </li>
  );
};

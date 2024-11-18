import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateTodo } from "../store";

export const TodoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todo);
  const currentTodo = todos.find((el) => el.id === parseInt(id));
  const [editContent, setEditContent] = useState(currentTodo.content);
  const [isEdit, setIsEdit] = useState(false);

  const updateContent = () => {
    if (!editContent.trim()) {
      alert("내용을 입력해주세요!");
      return;
    }
    dispatch(updateTodo({ ...currentTodo, content: editContent }));
    setIsEdit(false);
  };

  if (isEdit === false) {
    return (
      <div>
        <button onClick={() => navigate("/")}>뒤로가기</button>
        <h2>{currentTodo.title}</h2>
        <div>{currentTodo.content}</div>
        <button onClick={() => setIsEdit(true)}>수정 </button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>{currentTodo.title}</h2>
        <input
          type="text"
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
        />
        <button onClick={() => updateContent()}>수정 완료 </button>
        <button onClick={() => setIsEdit(false)}>취소 </button>
      </div>
    );
  }
};

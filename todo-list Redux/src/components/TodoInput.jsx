import { useRef } from "react";
import { FcDownLeft } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { addTodo } from "../store";

export const TodoInput = () => {
  const dispatch = useDispatch();
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const addNewTodo = () => {
    const title = titleRef.current.value.trim();
    const content = contentRef.current.value.trim();
    if (!title || !content) {
      alert("제목과 내용을 입력해주세요!");
      return;
    }
    const newTodo = {
      id: Date.now(),
      title,
      content,
      checked: false,
    };
    dispatch(addTodo(newTodo));
    titleRef.current.value = "";
    contentRef.current.value = "";
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addNewTodo();
    }
  };

  return (
    <>
      <div className="inputContainer">
        <input
          className="input"
          type="text"
          ref={titleRef}
          placeholder="제목"
          onKeyDown={handleKeyPress}
        />
        <input
          className="input"
          type="text"
          ref={contentRef}
          placeholder="내용"
          onKeyDown={handleKeyPress}
        />
        <button className="w-btn w-btn-skin" onClick={addNewTodo}>
          <FcDownLeft />
        </button>
      </div>
    </>
  );
};

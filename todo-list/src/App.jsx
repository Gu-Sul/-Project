// 기능구현 목록
// 글 작성하기
// 작성한 글 리스트에 저장하기
// 작성한 글 삭제 , 수정
// 한 일과 안 한 일 구분하기(완료 체크)
// 리스트 로컬스토리지에 저장하기

import { useRef, useState } from "react";
import "./App.css";

function App() {
  const now = new Date();
  const [todo, setTodo] = useState([]);
  return (
    <>
      <TodoInput setTodo={setTodo} now={now} />
      <TodoList todo={todo} setTodo={setTodo} />
    </>
  );
}

const TodoInput = ({ setTodo, now }) => {
  const inputRef = useRef(null);
  const addTodo = () => {
    const newTodo = {
      id: Number(now),
      content: inputRef.current.value,
    };
    setTodo((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          ref={inputRef}
          placeholder="할 일을 입력해주세요."
          onKeyDown={handleKeyPress}
        />
        <button onClick={addTodo}>추가</button>
      </div>
    </>
  );
};
const TodoList = ({ todo, setTodo }) => {
  return (
    <>
      <ul>
        {todo.map((el) => (
          <Todo todo={el} setTodo={setTodo} key={el.id} />
        ))}
      </ul>
    </>
  );
};

const Todo = ({ todo, setTodo }) => {
  const [isEdit, setIsEdit] = useState(false);

  if (isEdit === false) {
    return (
      <li>
        {todo.content}
        <button
          onClick={() => {
            setIsEdit(true);
          }}
        >
          수정
        </button>
        <button
          onClick={() => {
            setTodo((prev) => prev.filter((el) => el.id !== todo.id));
          }}
        >
          삭제
        </button>
      </li>
    );
  } else {
    return (
      <li>
        <input type="text" value={todo.content} />
        <button
          onClick={() => {
            setIsEdit(false);
          }}
        >
          수정 완료
        </button>
        <button
          onClick={() => {
            setIsEdit(false);
          }}
        >
          수정취소
        </button>
      </li>
    );
  }
};

export default App;

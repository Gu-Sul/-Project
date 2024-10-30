import { useEffect, useRef, useState } from "react";
import { RiDeleteBack2Line } from "react-icons/ri";
import "./App.scss";
import { BiSolidEditAlt } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { GoTrash } from "react-icons/go";
import { FcComments, FcDownLeft, FcSettings } from "react-icons/fc";

function App() {
  const [todo, setTodo] = useState(() => {
    const browserValue = localStorage.getItem("content");
    return browserValue ? JSON.parse(browserValue) : [];
  });
  useEffect(() => {
    localStorage.setItem("content", JSON.stringify(todo));
  }, [todo]);
  return (
    <>
      <div className="container">
        <MusicPlay />
        <TodoInput setTodo={setTodo} />
        <TodoList todo={todo} setTodo={setTodo} />
      </div>
    </>
  );
}

const TodoInput = ({ setTodo }) => {
  const inputRef = useRef(null);
  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      content: inputRef.current.value,
      checked: false,
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
      <div className="inputContainer">
        <input
          className="input"
          type="text"
          ref={inputRef}
          placeholder="할 일을 입력해주세요."
          onKeyDown={handleKeyPress}
        />
        <button
          className="w-btn w-btn-skin"
          onClick={() => {
            if (inputRef.current.value === "") {
              alert("내용을 입력해주세요!");
            } else {
              addTodo();
            }
          }}
        >
          <FcDownLeft />
        </button>
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
  const [editContent, setEditContent] = useState(todo.content);
  const toggleCheckbox = () => {
    setTodo((prev) =>
      prev.map((el) =>
        el.id === todo.id ? { ...el, checked: !el.checked } : el
      )
    );
  };

  const update = () => {
    setTodo((prev) =>
      prev.map((el) =>
        el.id === todo.id ? { ...el, content: editContent } : el
      )
    );
    setIsEdit(false);
  };
  if (isEdit === false) {
    return (
      <li>
        <ToggleButton todo={todo} toggleCheckbox={toggleCheckbox} />
        <span
          style={{
            color: todo.checked ? "lightgray" : "black",
          }}
        >
          {todo.content}
        </span>
        <button
          className="listButton"
          onClick={() => {
            setIsEdit(true);
          }}
        >
          <FcSettings />
        </button>
        <button
          onClick={() => {
            setTodo((prev) => prev.filter((el) => el.id !== todo.id));
          }}
        >
          <GoTrash />
        </button>
      </li>
    );
  } else {
    return (
      <li>
        <input
          type="text"
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
        />
        <button className="listButton editing" onClick={update}>
          <FaCheck />
        </button>
        <button
          className="editing"
          onClick={() => {
            setIsEdit(false);
          }}
        >
          <RiDeleteBack2Line />
        </button>
      </li>
    );
  }
};

const MusicPlay = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("/Married Life.mp3"));
  const playMusic = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
      audio.currentTime = 0;
    }
  };
  return (
    <div>
      <h1 className={isPlaying && "title"} fifth onClick={playMusic}>
        Todo List
      </h1>
    </div>
  );
};

const ToggleButton = ({ todo, toggleCheckbox }) => {
  return (
    <>
      <div className="toggle-wrapper">
        <input
          className="toggle-checkbox"
          type="checkbox"
          checked={todo.checked}
          onChange={toggleCheckbox}
        />
        <div className="toggle-container">
          <div className="toggle-button"></div>
        </div>
      </div>
    </>
  );
};

export default App;

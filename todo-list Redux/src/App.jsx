import { useEffect, useState } from "react";
import "./App.scss";
import { MusicPlay } from "./components/MusicPlay";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { Route, Routes } from "react-router-dom";
import { Main } from "./page/Main";
import { Detail } from "./page/Detail";

function App() {
  return (
    <>
      <div className="container">
        <MusicPlay />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/todo/:id" element={<Detail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

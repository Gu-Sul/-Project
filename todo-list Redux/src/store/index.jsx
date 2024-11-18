import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: JSON.parse(localStorage.getItem("content")) || [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((el) => el.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const index = state.todo.findIndex((el) => el.id === action.payload.id);
      if (index !== -1) {
        state.todo[index] = action.payload;
      }
    },
    toggleTodo: (state, action) => {
      const todo = state.todo.find((el) => el.id === action.payload);
      if (todo) {
        todo.checked = !todo.checked;
      }
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, toggleTodo } =
  todoSlice.actions;

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

store.subscribe(() => {
  localStorage.setItem("content", JSON.stringify(store.getState().todo.todo));
});

export default store;

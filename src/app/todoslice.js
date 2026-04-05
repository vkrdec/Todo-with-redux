import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: ["hello", "developer"],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (action.payload == "") {
        alert("Please enter a task");
      } else {
        state.todo.push(action.payload);
      }
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

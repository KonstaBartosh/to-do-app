import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
  {id: nanoid(), title: 'play golf', isActive: true },
  {id: nanoid(), title: 'play soccer', isActive: true}
  ],
} 

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    todoAdd: (state, action) => {
      state.todos = [action.payload, ...state.todos]
    },
    clearTodos: (state) => {
      state.todos = []
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((task) => {
        return task.id !== action.payload
      })
    },
    markTodo: (state, action) => {
      console.log('Action:', action);
      const { id } = action.payload;
      const todoToMark = state.todos.find((task) => task.id === id);
    
      if (todoToMark) {
        todoToMark.isActive = !todoToMark.isActive;
      }
    },
  }
})

export const { todoAdd, clearTodos, removeTodo, markTodo } = todoSlice.actions
export default todoSlice.reducer
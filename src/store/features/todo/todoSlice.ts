import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
  {id: nanoid(), title: 'Play golf', isActive: true },
  {id: nanoid(), title: 'Play soccer', isActive: true},
  {id: nanoid(), title: 'Make a filter coffe', isActive: true},
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
      const { id } = action.payload
      const todoToMark = state.todos.find((task) => task.id === id)
    
      if (todoToMark) {
        todoToMark.isActive = !todoToMark.isActive;
      }
    },
    editTodo: (state, action) => {
      console.log('Action payload in editTodo:', action.payload);
      const { id, newTitle } = action.payload
      const todoToEdit = state.todos.find((task) => task.id === id)
      
      if (todoToEdit) {
        todoToEdit.title = newTitle
      }
    }
  }
})

export const { todoAdd, clearTodos, removeTodo, markTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer
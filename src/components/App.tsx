import { useSelector } from "react-redux"
import { RootState } from "store/store"
import { useDispatch } from "react-redux"

import { clearTodos } from "../store/features/todo/todoSlice"

import ToDoItem from "./ToDoItem"
import Form from "./Form"
import Button from "./UI/Button"


function App() {
  const dispatch = useDispatch()

  const todos = useSelector((state: RootState) => state.todos.todos)
  
  console.log(todos)

  const handleReset = () => {
    dispatch(clearTodos())
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col w-3/4 md:w-1/2 mt-20 p-6 border-[1px] rounded-md gap-6'>
        <h1 className="text-center text-3xl font-semibold text-white">
          To Do List
        </h1>
        <Form
        />
        {todos.map(item => (
          <ToDoItem
          key={item.id}
          id={item.id}
          title={item.title}
          isActive={item.isActive}
          />
        ))}
        <div className='flex flex-row justify-center'>
          <Button
            label="Очистить"
            type="reset"
            onClick={handleReset}
          />
        </div>
      </div>
    </div>
  )
}

export default App

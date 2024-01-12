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
      <div className='
        flex 
        flex-col
        gap-6
        w-full
        mt-20
        p-6
        lg:w-1/2 
        md:border-[1px] 
        md:w-3/4
        rounded-md'
      >
        <h1 className="text-center text-4xl font-bold text-white">
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

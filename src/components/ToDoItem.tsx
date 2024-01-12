import classNames from 'classnames';
import { BiEdit, BiTrash } from "react-icons/bi";

import { useDispatch } from "react-redux";
import { markTodo, removeTodo } from "../store/features/todo/todoSlice";

interface ToDoItemProps {
  title: string,
  id: string,
  isActive: boolean
}

const ToDoItem = ({ title, id, isActive }: ToDoItemProps) => {
  const dispatch = useDispatch()

  const handleRemoveTask = () => {
    dispatch(removeTodo(id))
  }

  const handleDoneTask = () => {
    dispatch(markTodo({id}))
  }

  const handleCheck = () => {
    console.log('ffsf')
    dispatch(markTodo({id}))
  }

  const titleStateClass = classNames(
    'text-xl',
    'font-semibold',
    'cursor-pointer',
    { 'line-through decoration-slate-400': !isActive }
  );

  return(
    <div className="flex flex-row justify-between p-4 border-[1px]">
      <h2 className={titleStateClass}>
        {title}
      </h2>
      <div className="flex gap-3 items-center">
        <input
          className='accent-black w-5 h-5'
          type='checkbox'
          onChange={handleCheck}
        />
        <button className="hover:opacity-80">
          <BiEdit size={24}/>
        </button>
        <button
          className="hover:opacity-80"
          onClick={handleRemoveTask}
        >
          <BiTrash size={24}/>
        </button>
      </div>
    </div>
  )
}

export default ToDoItem;
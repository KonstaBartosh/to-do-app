import classNames from 'classnames';
import { BiEdit, BiTrash } from "react-icons/bi";

import { useDispatch } from "react-redux";
import { editTodo, markTodo, removeTodo } from "../store/features/todo/todoSlice";
import { useState } from 'react';
import Input from './UI/Input';
import Button from './UI/Button';

interface ToDoItemProps {
  title: string,
  id: string,
  isActive: boolean
}

const ToDoItem = ({ title, id, isActive }: ToDoItemProps) => {
  const dispatch = useDispatch()

  const [isEditClicked, setIsEditClicked] = useState(false)
  const [task, setNewTask] = useState(title)

  const handleRemoveTask = () => {
    dispatch(removeTodo(id))
  }

  const handleDoneTask = () => {
    dispatch(markTodo({id}))
  }

  const handleEditTask = () => {
    setIsEditClicked(true)
  }

  const handleInputChange = 
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      setNewTask(evt.target.value)
  }

  const submitNewTask = () => {
    dispatch(editTodo({id, newTitle: task}))
    setIsEditClicked(false)
  }

  const titleStateClass = classNames(
    'text-xl',
    'font-semibold',
    'cursor-pointer',
    { 'line-through decoration-slate-400': !isActive }
  );

  return(
    <div className="flex flex-row justify-between p-4 border-[1px]">
      {!isEditClicked ? (
        <h2 className={titleStateClass}>{title}</h2>
      ) : (
        <Input type='text' value={task} onChange={handleInputChange}/>
      )}
      <div className="flex gap-3 items-center pl-4">
        {!isEditClicked ? (
        <>
          <input 
            className='accent-black w-5 h-5 cursor-pointer' 
            type='checkbox' 
            onChange={handleDoneTask}
          />
          <button className="hover:opacity-80" onClick={handleEditTask}>
            <BiEdit size={24}/>
          </button>
          <button className="hover:opacity-80" onClick={handleRemoveTask}>
            <BiTrash size={24}/>
          </button>
        </>
        ) : (
          <Button label='Редактировать' type='submit' onClick={submitNewTask}/>
        )}
      </div>
    </div>
  )
}

export default ToDoItem;
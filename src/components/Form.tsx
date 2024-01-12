import { useCallback, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { todoAdd } from "../store/features/todo/todoSlice";

import Button from "./UI/Button";
import Input from "./UI/Input";

const Form = () => {
  const [task, setTask] = useState('')

  const dispatch = useDispatch()

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTask(evt.target.value)
  };

  const handleSubmit = useCallback((evt: unknown) => {
    evt.preventDefault();

    if (task.length === 0 || task === ' ') {
      toast.error('Поле пустое!')
      return
    }

    dispatch(todoAdd({
      id: nanoid(),
      title: task,
      isActive: true
    }))

    setTask('')
  }, [dispatch, task])
  

  return (
    <form
      className="flex flex-row justify-between h-10 gap-4"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Создать задачу"
      />
      <Button
        label='Создать'
        type="submit"
      />
    </form>
  )
}

export default Form;
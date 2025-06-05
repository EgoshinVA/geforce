import React from 'react'
import { DomainTodolist } from '@/shared/types/todolistTypes'
import { RemoveButton } from '@/components/buttons/RemoveButton/RemoveButton'
import s from './TodolistTitle.module.scss'
import { useRemoveTodolistMutation, useUpdateTodolistTitleMutation } from '@/shared/services/todolistsApi'
import { EditableTitle } from '@/components/EditableTitle/EditableTitle'
import { CreateInput } from '@/components/CreateInput/CreateInput'
import { useAddTaskMutation } from '@/shared/services/tasksApi'

type Props = {
  todolist: DomainTodolist
}

export const TodolistTitle = ({ todolist }: Props) => {
  const { title, id } = todolist

  const [removeTodolist] = useRemoveTodolistMutation()
  const [updateTodolist] = useUpdateTodolistTitleMutation()
  const [createTask] = useAddTaskMutation()

  const removeTodolistHandler = () => {
    removeTodolist(id)
  }

  const updateTodolistHandler = (title: string) => {
    updateTodolist({ title, todolistId: id })
  }

  const createTaskHandler = (title: string) => {
    createTask({ title, todolistId: id })
  }

  return (
    <div className={s.titleGroup}>
      <div className={s.title}>
        <EditableTitle title={title} onChange={updateTodolistHandler} />
        <RemoveButton onClick={removeTodolistHandler} />
      </div>
      <CreateInput onCLick={createTaskHandler} placeholder={'Add new task'} />
    </div>
  )
}
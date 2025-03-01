import React from 'react'
import { DomainTodolist } from '@/types/todolistTypes'
import { RemoveButton } from '@/components/buttons/RemoveButton/RemoveButton'
import s from './TodolistTitle.module.scss'
import { useRemoveTodolistMutation } from '@/services/todolistsApi'
import { EditableTitle } from '@/components/EditableTitle/EditableTitle'

type Props = {
  todolist: DomainTodolist
}

export const TodolistTitle = ({ todolist }: Props) => {
  const { title, id } = todolist

  const [removeTl] = useRemoveTodolistMutation()

  const removeTodolist = () => {
    removeTl(id)
  }

  return (
    <div className={s.title}>
      <EditableTitle title={title} onChange={() => {}}/>
      <RemoveButton onClick={removeTodolist} />
    </div>
  )
}
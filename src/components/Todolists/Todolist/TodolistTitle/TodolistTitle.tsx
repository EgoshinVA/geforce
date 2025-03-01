import React from 'react'
import { DomainTodolist } from '@/types/todolistTypes'
import { RemoveButton } from '@/components/buttons/RemoveButton/RemoveButton'
import s from './TodolistTitle.module.scss'

type Props = {
  todolist: DomainTodolist
}

export const TodolistTitle = ({ todolist }: Props) => {
  const { title } = todolist

  const removeTodolist = () => {
    console.log('removing todolist')
  }

  return (
    <div className={s.title}>
      {title}
      <RemoveButton onClick={removeTodolist} />
    </div>
  )
}
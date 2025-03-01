import React from 'react'
import { DomainTodolist } from '@/types/todolistTypes'
import { TodolistTitle } from '@/components/Todolists/Todolist/TodolistTitle/TodolistTitle'
import { FilterButtons } from '@/components/Todolists/Todolist/FilterButtons/FilterButtons'
import s from './Todolist.module.scss'
import { Tasks } from '@/components/Todolists/Todolist/Tasks/Tasks'

type Props = {
  todolist: DomainTodolist
}

export const Todolist = ({todolist}: Props) => {
  return (
    <div className={s.todolist}>
      <TodolistTitle todolist={todolist}/>
      <Tasks todolist={todolist}/>
      <FilterButtons todolist={todolist}/>
    </div>
  )
}
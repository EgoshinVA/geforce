import { TodolistTitle } from '@/components/Todolists/Todolist/TodolistTitle/TodolistTitle'
import { DomainTodolist } from '@/types/todolistTypes'

export default {
  title: 'TodolistTitle',
}

export const SimpleTitle = () => {
  const todolist: DomainTodolist = {
    title: 'todolist',
    filter: 'all',
    order: 1,
    addedDate: 1,
    id: '1'
  }

  return (
    <TodolistTitle todolist={todolist}/>
  )
}
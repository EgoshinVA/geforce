import { Todolist } from '@/components/Todolists/Todolist/Todolist'
import { DomainTodolist } from '@/types/todolistTypes'

export default {
  title: 'Todolist',
}

export const TodolistWithoutTasks = () => {
  const todolist: DomainTodolist = {
    title: 'todolist',
    filter: 'all',
    order: 1,
    addedDate: 1,
    id: '1'
  }
  return (
    <Todolist todolist={todolist}/>
  )
}
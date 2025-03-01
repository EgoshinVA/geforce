import { Tasks } from '@/components/Todolists/Todolist/Tasks/Tasks'
import { DomainTodolist } from '@/types/todolistTypes'

export default {
  title: 'Tasks',
}

export const ExampleTasks = () => {
  const todolist: DomainTodolist = {
    title: 'todolist',
    filter: 'all',
    order: 1,
    addedDate: 1,
    id: '1',
  }
  return (
    <Tasks todolist={todolist} />
  )
}

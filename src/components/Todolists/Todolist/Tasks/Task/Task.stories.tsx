import { Task } from '@/components/Todolists/Todolist/Tasks/Task/Task'
import { TaskType } from '@/types/tasksTypes'

export default {
  title: 'Task'
}

export const SimpleTask = () => {
  const task: TaskType = {
    title:'title',
    order: 1,
    addedDate: 1,
    completed: false,
    deadline: 1,
    description: '',
    priority: 0,
    status: 0,
    startDate: 0,
    todoListId: '1',
    id: '1'
  }

  return (<Task task={task}/>)
}
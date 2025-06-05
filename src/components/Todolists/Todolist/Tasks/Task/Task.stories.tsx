import { Task } from '@/components/Todolists/Todolist/Tasks/Task/Task'
import { TaskType } from '@/shared/types/tasksTypes'
import { TaskStatus } from '@/shared/types/enums'

export default {
  title: 'Task'
}

const task: TaskType = {
  title:'title',
  order: 1,
  addedDate: 1,
  completed: false,
  deadline: 1,
  description: '',
  priority: 0,
  status: TaskStatus.New,
  startDate: 0,
  todoListId: '1',
  id: '1'
}

export const SimpleTask = () => <Task task={task}/>
export const CompletedTask = () => <Task task={{...task, status: TaskStatus.Completed}} />
import { TaskStatus } from '@/types/enums'

export type TaskType = {
  description: string
  title: string
  completed: boolean
  status: TaskStatus
  priority: number
  startDate: number
  deadline: number
  id: string
  todoListId: string
  order: number
  addedDate: number
}

export type TaskResponse = {
  items: TaskType[]
  totalCount: number
  error: string | null
}

export type UpdateTask = {
  title: string
  description: string
  completed: boolean
  status: number
  priority: number
  startDate: number
  deadline: number
}
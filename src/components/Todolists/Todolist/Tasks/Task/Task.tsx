import React, { ChangeEvent } from 'react'
import { TaskType, UpdateTask } from '@/types/tasksTypes'
import s from './Task.module.scss'
import { TaskStatus } from '@/types/enums'
import { RemoveButton } from '@/components/buttons/RemoveButton/RemoveButton'
import { EditableTitle } from '@/components/EditableTitle/EditableTitle'
import { useRemoveTaskMutation, useUpdateTaskMutation } from '@/services/tasksApi'

type Props = {
  task: TaskType
}

export const Task = ({ task }: Props) => {
  const { title, status, id, todoListId } = task
  const completed = status === TaskStatus.Completed

  const [removeTask] = useRemoveTaskMutation()
  const [updateTask] = useUpdateTaskMutation()

  const updateTaskHandler = (arg: { title?: string, status?: TaskStatus }) => {
    const { title = task.title, status = task.status } = arg
    const newTask: UpdateTask = {
      completed: task.completed,
      status,
      title,
      deadline: task.deadline,
      description: task.description,
      priority: task.priority,
      startDate: task.startDate,
    }

    updateTask({ todolistId: todoListId, taskId: id, model: newTask })
  }

  const updateTitle = (title: string) => {
    updateTaskHandler({ title })
  }

  const updateStatus = (e: ChangeEvent<HTMLInputElement>) => {
    const status: TaskStatus = e.currentTarget.checked ? TaskStatus.Completed : TaskStatus.New
    updateTaskHandler({ status })
  }

  const removeTaskHandler = () => {
    removeTask({ todolistId: todoListId, taskId: id })
  }

  return (
    <div className={`${s.task} ${completed ? s.completed : ''}`}>
      <input checked={completed} type={'checkbox'} onChange={updateStatus} />
      <EditableTitle title={title} onChange={updateTitle} />
      <RemoveButton onClick={removeTaskHandler} />
    </div>
  )
}
//todo add remove logic
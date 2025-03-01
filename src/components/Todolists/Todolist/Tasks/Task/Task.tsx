import React from 'react'
import { TaskType } from '@/types/tasksTypes'
import s from './Task.module.scss'
import { TaskStatus } from '@/types/enums'
import { RemoveButton } from '@/components/buttons/RemoveButton/RemoveButton'
import { EditableTitle } from '@/components/EditableTitle/EditableTitle'

type Props = {
  task: TaskType
}

export const Task = ({ task }: Props) => {
  const {title, status} = task
  const completed = status === TaskStatus.Completed

  const removeTask = () => {
    console.log('Removing task')
  }

  return (
    <div className={`${s.task} ${completed ? s.completed : ''}`}>
      <input checked={completed} type={'checkbox'} />
      <EditableTitle title={title} onChange={() => {}} />
      <RemoveButton onClick={removeTask}/>

    </div>
  )
}
//todo add remove logic
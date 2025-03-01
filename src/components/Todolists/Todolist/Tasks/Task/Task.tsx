import React from 'react'
import { TaskType } from '@/types/tasksTypes'
import Image from 'next/image'
import s from './Task.module.scss'

type Props = {
  task: TaskType
}

export const Task = ({ task }: Props) => {

  return (
    <div className={s.task}>
      <input type={'checkbox'} />
      <p className={s.title}>{task.title}</p>
      <Image src={'/garbage.svg'} alt={'garbage'} width={15} height={15} />
    </div>
  )
}
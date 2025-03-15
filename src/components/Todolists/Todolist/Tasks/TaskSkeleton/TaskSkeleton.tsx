import React from 'react'
import s from './TaskSkeleton.module.scss'

export const TaskSkeleton = () => {
  return (
    <div className={s.tasksSkeleton}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
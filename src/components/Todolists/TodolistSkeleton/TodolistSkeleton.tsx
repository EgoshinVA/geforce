import React from 'react'
import s from './TodolistSkeleton.module.scss'

export const TodolistSkeleton = () => {
  return (
    <div className={s.skeleton}>
      <div className={s.skeletonTitle}></div>
      <div className={s.skeletonTasks}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={s.skeletonFilters}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
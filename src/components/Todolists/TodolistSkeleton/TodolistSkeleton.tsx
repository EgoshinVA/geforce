'use client'
import React from 'react'
import s from './TodolistSkeleton.module.scss'

export const TodolistSkeleton = () => {
  return (
    <div className={s.skeleton}>
      <div className={s.header} />
      <div className={s.task} />
      <div className={s.task} />
      <div className={s.task} />
      <div className={s.footer} />
    </div>
  )
}
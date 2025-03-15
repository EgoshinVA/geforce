import React from 'react'
import { useGetTodolistsQuery } from '@/services/todolistsApi'
import { Todolist } from '@/components/Todolists/Todolist/Todolist'
import s from './Todolists.module.scss'
import { TodolistSkeleton } from '@/components/Todolists/TodolistSkeleton/TodolistSkeleton'

export const Todolists = () => {
  const { data, isLoading } = useGetTodolistsQuery()

  if ( !isLoading) {
    return (
      <div className={s.todolists}>
        {new Array(3).fill(null).map((_, index) => (
          <TodolistSkeleton key={index}/>
        ))}
      </div>
    )
  }

  return (
    <div className={s.todolists}>
      {data?.map(tl => <Todolist key={tl.id} todolist={tl} />)}
    </div>
  )
}
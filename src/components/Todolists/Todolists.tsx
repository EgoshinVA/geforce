import React from 'react'
import { useGetTodolistsQuery } from '@/services/todolistsApi'
import { Todolist } from '@/components/Todolists/Todolist/Todolist'
import s from './Todolists.module.scss'

export const Todolists = () => {
  const { data } = useGetTodolistsQuery()

  return (
    <div className={s.todolists}>
      {data?.map(tl => <Todolist key={tl.id} todolist={tl} />)}
    </div>
  )
}
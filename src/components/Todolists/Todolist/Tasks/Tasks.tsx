import React from 'react'
import { DomainTodolist } from '@/types/todolistTypes'
import { Task } from '@/components/Todolists/Todolist/Tasks/Task/Task'
import s from './Tasks.module.scss'
import { useGetTasksQuery } from '@/services/tasksApi'

type Props = {
  todolist: DomainTodolist
}

export const Tasks = ({ todolist }: Props) => {
  const {id} = todolist

  //todo filter tasks

  const {data} = useGetTasksQuery(id)

  const tasksForTodolist = data?.items

  console.log(tasksForTodolist)

  return (
    <div className={s.tasks}>
      {tasksForTodolist?.length ? tasksForTodolist?.map(t => <Task task={t} />) : <p>Тасок нет</p>}
    </div>
  )
}
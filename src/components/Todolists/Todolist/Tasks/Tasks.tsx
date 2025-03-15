import React, { useState } from 'react'
import { DomainTodolist } from '@/types/todolistTypes'
import { Task } from '@/components/Todolists/Todolist/Tasks/Task/Task'
import s from './Tasks.module.scss'
import { PAGE_SIZE, useGetTasksQuery } from '@/services/tasksApi'
import { TaskStatus } from '@/types/enums'
import ResponsivePagination from 'react-responsive-pagination';
import { TaskSkeleton } from '@/components/Todolists/Todolist/Tasks/TaskSkeleton/TaskSkeleton'

type Props = {
  todolist: DomainTodolist
}

export const Tasks = ({ todolist }: Props) => {
  const [page, setPage] = useState<number>(1)
  const { id, filter } = todolist

  const { data, isLoading } = useGetTasksQuery({ todolistId: id, page })

  const totalCount = data?.totalCount || 0

  const pageCount = Math.ceil(totalCount / PAGE_SIZE)

  const handlePageClick = (page: number) => {
    setPage(page)
  }

  if (isLoading) {
    return <TaskSkeleton/>
  }

  let tasksForTodolist = data?.items

  if (filter === 'active')
    tasksForTodolist = tasksForTodolist?.filter(ts => ts.status === TaskStatus.New)
  if (filter === 'complete')
    tasksForTodolist = tasksForTodolist?.filter(ts => ts.status === TaskStatus.Completed)

  return (
    <div className={s.tasks}>
      {tasksForTodolist?.length ? tasksForTodolist?.map(t => <Task key={t.id} task={t} />) : <p>Тасок нет</p>}
      {totalCount > PAGE_SIZE &&
        <ResponsivePagination
          className={s.pagination}
          onPageChange={handlePageClick}
          current={page}
          total={pageCount}
        />}
    </div>
  )
}
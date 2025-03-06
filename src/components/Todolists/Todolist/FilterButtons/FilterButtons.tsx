import React from 'react'
import { Button } from '@/components/buttons/Button/Button'
import { DomainTodolist, FilterType } from '@/types/todolistTypes'
import s from './FilterButtons.module.scss'
import { useAppDispatch } from '@/hooks/appHooks'
import { todolistsApi } from '@/services/todolistsApi'

type Props = {
  todolist: DomainTodolist
}

export const FilterButtons = ({ todolist }: Props) => {
  const { filter, id } = todolist
  const dispatch = useAppDispatch()
  const changeFilter = (filter: FilterType) => {
    dispatch(todolistsApi.util.updateQueryData('getTodolists', undefined, (state) => {
      const todolist = state.find(tl => tl.id === id)
      if (todolist)
        todolist.filter = filter
    }))
  }

  return (
    <div className={s.filterButtons}>
      <Button active={filter === 'all'} title={'All'} onClick={() => changeFilter('all')} />
      <Button active={filter === 'active'} title={'Active'} onClick={() => changeFilter('active')} />
      <Button active={filter === 'complete'} title={'Completed'} onClick={() => changeFilter('complete')} />
    </div>
  )
}
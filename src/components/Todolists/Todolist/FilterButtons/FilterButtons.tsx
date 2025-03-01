import React from 'react'
import { Button } from '@/components/buttons/Button/Button'
import { DomainTodolist } from '@/types/todolistTypes'
import s from './FilterButtons.module.scss'

type Props = {
  todolist: DomainTodolist
}

export const FilterButtons = ({todolist}: Props) => {
  const {filter} = todolist
  const changeFilter = () => {

  }

  return (
    <div className={s.filterButtons}>
        <Button active={filter === 'all'} title={'All'} onClick={changeFilter}/>
        <Button active={filter === 'active'} title={'Active'} onClick={changeFilter}/>
        <Button active={filter === 'complete'} title={'Completed'} onClick={changeFilter}/>
    </div>
  )
}
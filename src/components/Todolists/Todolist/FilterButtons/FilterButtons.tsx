import React from 'react'
import { Button } from '@/components/Button/Button'
import { DomainTodolist } from '@/types/todolistTypes'

type Props = {
  todolist: DomainTodolist
}

export const FilterButtons = ({todolist}: Props) => {
  const {filter} = todolist
  const changeFilter = () => {

  }

  return (
    <div>
        <Button active={filter === 'all'} title={'All'} onClick={changeFilter}/>
        <Button active={filter === 'active'} title={'Active'} onClick={changeFilter}/>
        <Button active={filter === 'complete'} title={'Completed'} onClick={changeFilter}/>
    </div>
  )
}
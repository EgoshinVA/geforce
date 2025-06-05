'use client'
import React from 'react'
import { TodolistSkeleton } from '@/components/Todolists/TodolistSkeleton/TodolistSkeleton'
import { CreateInput } from '@/components/CreateInput/CreateInput'
import s from './Todolists.module.scss'
import { DomainTodolist } from '@/shared/types/todolistTypes'
import { Todolist } from '@/components/Todolists/Todolist/Todolist'
import { useTodolists } from '@/shared/hooks/useTodolists'

type Props = {
  todolists: DomainTodolist[]
}

export const Todolists = ({ todolists }: Props) => {
  const { todolists: dataForRender, isLoading, createTodolist } = useTodolists(todolists)

  return (
    <div className={s.container}>
      <div className={s.inputContainer}>
        <CreateInput
          onCLick={createTodolist}
          placeholder="Add new todolist"
        />
      </div>

      {isLoading ? (
        <div className={s.todolistsGrid}>
          {new Array(3).fill(null).map((_, index) => (
            <TodolistSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className={s.todolistsGrid}>
          {dataForRender?.map(tl => (
            <Todolist key={tl.id} todolist={tl} />
          ))}
        </div>
      )}
    </div>
  )
}
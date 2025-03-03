import React from 'react'
import { Todolists } from '@/components/Todolists/Todolists'
import s from './Main.module.scss'
import { ErrorModal } from '@/components/ErrorModal/ErrorModal'
import { CreateInput } from '@/components/CreateInput/CreateInput'
import { useCreateTodolistMutation } from '@/services/todolistsApi'

export const Main = () => {
  const [createTodolist] = useCreateTodolistMutation()

  return (
    <div className={s.main}>
      <CreateInput onCLick={createTodolist}/>
      <Todolists/>
      <ErrorModal />
    </div>
  )
}
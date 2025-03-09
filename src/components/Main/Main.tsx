'use client'
import React from 'react'
import { Todolists } from '@/components/Todolists/Todolists'
import s from './Main.module.scss'
import { ErrorModal } from '@/components/ErrorModal/ErrorModal'
import { CreateInput } from '@/components/CreateInput/CreateInput'
import { useCreateTodolistMutation } from '@/services/todolistsApi'
import { redirect } from 'next/navigation'
import { useAppSelector } from '@/hooks/appHooks'
import { selectIsAuth } from '@/app/appSlice'

export const Main = () => {
  const isAuth = useAppSelector(selectIsAuth)
  const [createTodolist] = useCreateTodolistMutation()

  if(!isAuth){
    redirect('/login')
  }

  return (
    <div className={s.main}>
      <CreateInput onCLick={createTodolist}/>
      <Todolists/>
      <ErrorModal />
    </div>
  )
}
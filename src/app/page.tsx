'use client'
import { Todolists } from '@/components/Todolists/Todolists'
import s from './app.module.scss'
import { CreateInput } from '@/components/CreateInput/CreateInput'
import { useCreateTodolistMutation } from '@/services/todolistsApi'
import { redirect } from 'next/navigation'
import { useAppSelector } from '@/hooks/appHooks'
import { selectIsAuth } from '@/app/appSlice'

export default function Home () {
  const isAuth = useAppSelector(selectIsAuth)
  const [createTodolist] = useCreateTodolistMutation()

  if(!isAuth){
    redirect('/login')
  }

  return (
    <div className={s.app}>
      <CreateInput onCLick={createTodolist}/>
      <Todolists/>
    </div>
  )
}
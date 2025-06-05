import React from 'react'
import { Todolists } from '@/components/Todolists/Todolists'
import s from './../app.module.scss'
import { cookies } from 'next/headers'
import { DomainTodolist } from '@/shared/types/todolistTypes'
import { redirect } from 'next/navigation'

export default async function Page() {
  const cookieStore = await cookies()
  const token = cookieStore.get('accessToken')?.value

  if (!token) {
    redirect('/login')
  }

  const todolistsResponse = await fetch('https://social-network.samuraijs.com/api/1.1/todo-lists', {
    headers: {
      'API-KEY': '34623cfe-c2a8-47e3-aaaa-b90c74b71a18',
      'Authorization': `Bearer ${token}`,
    },
    next: { tags: ['todolists'] },
  })

  if (!todolistsResponse.ok) {
    throw new Error('Failed to fetch todolists')
  }

  const todolists: DomainTodolist[] = await todolistsResponse.json()

  return (
    <div className={s.app}>
      <Todolists todolists={todolists} />
    </div>
  )
}
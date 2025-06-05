'use client'
import { useEffect, useRef } from 'react'
import { todolistsApi, useCreateTodolistMutation, useGetTodolistsQuery } from '@/shared/services/todolistsApi'
import { DomainTodolist } from '@/shared/types/todolistTypes'
import { useAppDispatch } from '@/shared/hooks/appHooks'

export const useTodolists = (initialTodolists: DomainTodolist[] = []) => {
  const dispatch = useAppDispatch()
  const [createTodolist] = useCreateTodolistMutation()
  const needInitTodolistsInStore = useRef(!!initialTodolists.length)

  const { data, isLoading } = useGetTodolistsQuery(undefined, {
    skip: needInitTodolistsInStore.current,
  })

  useEffect(() => {
    if (needInitTodolistsInStore.current && initialTodolists.length) {
      dispatch(
        todolistsApi.util.upsertQueryData('getTodolists', undefined, initialTodolists),
      )
      needInitTodolistsInStore.current = false
    }
  }, [initialTodolists, dispatch])

  useEffect(() => {
    return () => {
      dispatch(todolistsApi.util.resetApiState())
    }
  }, [dispatch])

  return {
    todolists: data || initialTodolists,
    isLoading,
    createTodolist,
  }
}
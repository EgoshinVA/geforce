import { baseApi } from '@/app/store/baseApi'
import { DomainTodolist, TodolistType } from '@/types/todolistTypes'
import { BaseResponse } from '@/types/types'

export const todolistsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getTodolists: build.query<DomainTodolist[], void>({
      query: () => '/todo-lists',
      transformResponse: (data: TodolistType[]): DomainTodolist[] => {
        return data.map(tl => ({ ...tl, filter: 'all' }))
      },
      providesTags: ['Todolist'],
    }),
    removeTodolist: build.mutation<BaseResponse, string>({
      query: (todolistId) => ({
        url: `/todo-lists/${todolistId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todolist'],
    }),
  }),
})

export const { useGetTodolistsQuery, useRemoveTodolistMutation } = todolistsApi
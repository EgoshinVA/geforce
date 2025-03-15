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
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          todolistsApi.util.updateQueryData('getTodolists', undefined, state => {
            const index = state.findIndex(tl => tl.id === id)
            if (index !== -1) {
              state.splice(index, 1)
            }
          }),
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
      invalidatesTags: ['Todolist'],
    }),
    createTodolist: build.mutation<BaseResponse<{ item: TodolistType }>, string>({
      query: (title) => ({
        url: '/todo-lists',
        method: 'POST',
        body: { title },
      }),
      invalidatesTags: ['Todolist'],
    }),
    updateTodolistTitle: build.mutation<BaseResponse, { title: string, todolistId: string }>({
      query: ({ todolistId, title }) => ({
        url: `/todo-lists/${todolistId}`,
        method: 'PUT',
        body: { title },
      }),
      invalidatesTags: ['Todolist'],
    }),
  }),
})

export const {
  useGetTodolistsQuery,
  useRemoveTodolistMutation,
  useCreateTodolistMutation,
  useUpdateTodolistTitleMutation,
} = todolistsApi
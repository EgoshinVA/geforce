import { baseApi } from '@/app/store/baseApi'

export const todolistsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getTodolists: build.query<any, void>({
      query: () => '/todo-lists',
    }),
  }),
})

export const { useGetTodolistsQuery } = todolistsApi
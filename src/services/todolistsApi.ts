import { baseApi } from '@/app/store/baseApi'

export const todolistsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getTodolists: build.query({
      query: () => '',
    }),
  }),
})

export const { useGetTodolistsQuery } = todolistsApi
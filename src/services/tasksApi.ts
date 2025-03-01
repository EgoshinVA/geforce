import { baseApi } from '@/app/store/baseApi'
import { TaskResponse } from '@/types/tasksTypes'

export const tasksApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getTasks: build.query<TaskResponse, string>({
      query: (todolistId) => `/todo-lists/${todolistId}/tasks`,
      providesTags: (result, error, arg) => [{ type: 'Task', id: arg }],
    }),
  }),
})

export const { useGetTasksQuery } = tasksApi

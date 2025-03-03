import { baseApi } from '@/app/store/baseApi'
import { TaskResponse, TaskType, UpdateTask } from '@/types/tasksTypes'
import { BaseResponse } from '@/types/types'

export const tasksApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getTasks: build.query<TaskResponse, string>({
      query: (todolistId) => `/todo-lists/${todolistId}/tasks`,
      providesTags: (result, error, arg) => [{ type: 'Task', id: arg }],
    }),
    addTask: build.mutation<BaseResponse<{ data: TaskType }>, { todolistId: string, title: string }>({
      query: ({ todolistId, title }) => ({
        url: `/todo-lists/${todolistId}/tasks`,
        method: 'POST',
        body: { title },
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Task', id: arg.todolistId }],
    }),
    removeTask: build.mutation<BaseResponse, { todolistId: string, taskId: string }>({
      query: ({ todolistId, taskId }) => ({
        url: `/todo-lists/${todolistId}/tasks/${taskId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Task', id: arg.todolistId }],
    }),
    updateTask: build.mutation<BaseResponse<{ data: TaskType }>, {todolistId: string, taskId: string, model: UpdateTask}>({
      query: ({taskId, model, todolistId}) => ({
        url: `/todo-lists/${todolistId}/tasks/${taskId}`,
        method: 'PUT',
        body: model
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Task', id: arg.todolistId }],
    })
  }),
})

export const { useGetTasksQuery, useAddTaskMutation, useRemoveTaskMutation, useUpdateTaskMutation } = tasksApi

//todo realize fast remove
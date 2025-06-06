import { baseApi } from '@/shared/store/baseApi'
import { TaskResponse, TaskType, UpdateTask } from '@/shared/types/tasksTypes'
import { BaseResponse } from '@/shared/types/types'

export const PAGE_SIZE = 4

export const tasksApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getTasks: build.query<TaskResponse, { todolistId: string, page: number }>({
      query: ({ todolistId, page }) => ({
        url: `/todo-lists/${todolistId}/tasks`,
        params: {
          count: PAGE_SIZE,
          page,
        },
      }),
      providesTags: (result, error, { todolistId }) => [{ type: "Task", id: todolistId }],
    }),
    addTask: build.mutation<BaseResponse<{ data: TaskType }>, { todolistId: string, title: string }>({
      query: ({ todolistId, title }) => ({
        url: `/todo-lists/${todolistId}/tasks`,
        method: 'POST',
        body: { title },
      }),
      invalidatesTags: (result, error, { todolistId }) => [{ type: 'Task', id: todolistId }],
    }),
    removeTask: build.mutation<BaseResponse, { todolistId: string, taskId: string }>({
      query: ({ todolistId, taskId }) => ({
        url: `/todo-lists/${todolistId}/tasks/${taskId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, { todolistId }) => [{ type: 'Task', id: todolistId }],
    }),
    updateTask: build.mutation<BaseResponse<{ data: TaskType }>, {
      todolistId: string,
      taskId: string,
      model: UpdateTask
    }>({
      query: ({ taskId, model, todolistId }) => ({
        url: `/todo-lists/${todolistId}/tasks/${taskId}`,
        method: 'PUT',
        body: model,
      }),
      async onQueryStarted({ todolistId, taskId, model }, { dispatch, queryFulfilled, getState }) {
        const patchResults: any[] = []
        const cachedArgsForQuery = tasksApi.util.selectCachedArgsForQuery(getState(), 'getTasks')

        cachedArgsForQuery.forEach((el) => {
          patchResults.push(dispatch(tasksApi.util.updateQueryData('getTasks', { todolistId, page: el.page }, state => {
            const task = state.items.find(el => el.id === taskId)
            if (task) {
              task.status = model.status
            }
          })))

        })
        try {
          await queryFulfilled
        } catch {
          patchResults.forEach(el => el.undo())
        }
      },
      invalidatesTags: (result, error, { todolistId }) => [{ type: 'Task', id: todolistId }],
    }),
  }),
})

export const { useGetTasksQuery, useAddTaskMutation, useRemoveTaskMutation, useUpdateTaskMutation } = tasksApi
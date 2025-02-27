import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: 'https://social-network.samuraijs.com/api/1.1',
      prepareHeaders: headers => {
        headers.set('API-KEY', '34623cfe-c2a8-47e3-aaaa-b90c74b71a18')
        headers.set('Authorization', `Bearer ${localStorage.getItem('sn-token')}`)
      },

    })(args, api, extraOptions)
    return result
  },
  endpoints: () => ({}),
  tagTypes: ['Todolist', 'Task'],
})

//todo add error handler
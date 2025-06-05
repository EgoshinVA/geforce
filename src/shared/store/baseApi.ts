import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { handleError } from '@/shared/utils/handleError'
import { getCookie } from '@/shared/utils/cookieUtils'

export const baseApi = createApi({
  baseQuery: async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: 'https://social-network.samuraijs.com/api/1.1',
      prepareHeaders: headers => {
        headers.set('API-KEY', '34623cfe-c2a8-47e3-aaaa-b90c74b71a18')
        headers.set('Authorization', `Bearer ${getCookie('accessToken')}`)
      },

    })(args, api, extraOptions)

    handleError(api, result)

    return result
  },
  endpoints: () => ({}),
  tagTypes: ['Todolist', 'Task'],
})
import { baseApi } from '@/app/store/baseApi'
import { BaseResponse } from '@/types/types'

export const loginApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    me: build.query<BaseResponse<{
      id: number,
      email: string,
      login: string
    }>, void>({
      query: () => '/auth/me',
    }),
  }),
})

export const {useMeQuery} = loginApi
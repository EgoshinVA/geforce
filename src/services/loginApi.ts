import { baseApi } from '@/app/store/baseApi'
import { BaseResponse } from '@/types/types'
import { LoginArgs } from '@/types/loginTypes'

export const loginApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    me: build.query<BaseResponse<{
      id: number,
      email: string,
      login: string
    }>, void>({
      query: () => '/auth/me',
    }),
    login: build.mutation<BaseResponse<{ userId: number, token: string }>, LoginArgs>({
      query: (LoginArgs) => ({
        url: '/auth/login',
        method: 'POST',
        body: LoginArgs
      }),
    }),
    logout: build.mutation<BaseResponse, void>({
      query: () => ({
        url: '/auth/login',
        method: 'DELETE',
      })
    })
  }),
})

export const { useMeQuery, useLoginMutation, useLogoutMutation } = loginApi
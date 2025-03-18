import { baseApi } from '@/app/store/baseApi'
import { BaseResponse } from '@/types/types'
import { LoginArgs } from '@/types/loginTypes'
import { setIsAuth } from '@/app/appSlice'

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
        body: LoginArgs,
      }),
    }),
    logout: build.mutation<BaseResponse, void>({
      query: () => ({
        url: '/auth/login',
        method: 'DELETE',
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        await queryFulfilled
        dispatch(setIsAuth(false))
        await localStorage.removeItem('sn-token')
        dispatch(baseApi.util.invalidateTags(['Todolist', 'Task']))
      },
    }),
  }),
})

export const { useMeQuery, useLoginMutation, useLogoutMutation } = loginApi
import { baseApi } from '@/shared/store/baseApi'
import { BaseResponse } from '@/shared/types/types'
import { LoginArgs } from '@/shared/types/loginTypes'
import { setIsAuth } from '@/shared/store/appSlice'
import { ResultCode } from '@/shared/types/enums'
import { deleteCookie } from '@/shared/utils/cookieUtils'

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
        const response = await queryFulfilled
        if (response.data.resultCode === ResultCode.Success) {
          dispatch(setIsAuth(false))
          await deleteCookie('accessToken')
          dispatch(baseApi.util.invalidateTags(['Todolist', 'Task']))
        }
      },
    }),
  }),
})

export const { useMeQuery, useLoginMutation, useLogoutMutation } = loginApi
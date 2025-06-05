'use client'
import { useLoginMutation } from '@/shared/services/loginApi'
import { ResultCode } from '@/shared/types/enums'
import { useAppDispatch } from '@/shared/hooks/appHooks'
import { setIsAuth } from '@/shared/store/appSlice'
import { setCookie } from '@/shared/utils/cookieUtils'
import { LoginArgs } from '@/shared/types/loginTypes'

export const useAuth = () => {
  const [loginMutation, { isLoading }] = useLoginMutation()
  const dispatch = useAppDispatch()

  const login = async (data: LoginArgs) => {
    try {
      const res = await loginMutation(data).unwrap()

      if (res.resultCode === ResultCode.Success) {
        const token = res.data?.token
        if (token) {
          setCookie('accessToken', token.trim(), data.rememberMe ? 30 : 7)
        }
        dispatch(setIsAuth(true))
        return { success: true }
      }
      return { success: false, error: 'Login failed' }
    } catch (error) {
      console.error('Login failed:', error)
      return { success: false, error: 'An error occurred' }
    }
  }

  return { login, isLoading }
}
'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginArgs } from '@/types/loginTypes'
import s from './login.module.scss'
import { Button } from '@/components/buttons/Button/Button'
import { useLoginMutation } from '@/services/loginApi'
import { ResultCode } from '@/types/enums'
import { useAppDispatch, useAppSelector } from '@/hooks/appHooks'
import { selectIsAuth, setIsAuth } from '@/app/appSlice'
import { redirect } from 'next/navigation'

export default function Login() {
  const { register, handleSubmit, reset } = useForm<LoginArgs>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })
  const [login] = useLoginMutation()
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector(selectIsAuth)

  const onSubmit: SubmitHandler<LoginArgs> = (data) => {
    login(data).then((res) => {
      if (res.data?.resultCode === ResultCode.Success) {
        const token = res.data.data?.token
        if (token)
          localStorage.setItem('sn-token', token)
        dispatch(setIsAuth(true))
      }
    }).finally(() => {
      reset()
    })
  }

  if (isAuth) {
    redirect('')
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>Authorization</h2>
      <input className={s.input} type="email" placeholder="Email" {...register('email')} />
      <input className={s.input} type="password" placeholder="Password" {...register('password')} />
      <span className={s.checkBoxPlaceholder}>Remember me <input type="checkbox" {...register('rememberMe')} /></span>
      <Button title={'Login'} onClick={() => {
      }} />
    </form>
  )
}

//todo add validation
//todo fix initialization
//todo add moving svgs
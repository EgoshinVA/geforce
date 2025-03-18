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
  const { register, handleSubmit, reset, formState: { errors } } = useForm<LoginArgs>({
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
    redirect('/')
  }//remove

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>Authorization</h2>
      <p>Test account credentials:<br/>
        Email: free@samuraijs.com
        Password: free</p>
      <input className={s.input} type="email" placeholder="Email" {...register('email', {
        required: 'Email is required',
        pattern: {
          value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          message: 'Incorrect email address',
        },
      })} />
      {errors.email && <p className={s.error}>{errors.email.message}</p>}
      <input className={s.input} type="password" placeholder="Password" {...register('password', {
        required: 'Password is required',
        minLength: {
          value: 3,
          message: 'Password less then 3',
        },
      })} />
      {errors.password && <p className={s.error}>{errors.password.message}</p>}
      <span className={s.checkBoxPlaceholder}>Remember me <input type="checkbox" {...register('rememberMe')}></input></span>
      <Button title={'Login'} />
    </form>
  )
}
'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginArgs } from '@/types/loginTypes'
import s from './login.module.scss'
import { Button } from '@/components/buttons/Button/Button'

export default function Login() {
  const { register, handleSubmit, reset } = useForm<LoginArgs>()

  const onSubmit: SubmitHandler<LoginArgs> = (data) => {

  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>Authorization</h2>
      <input className={s.input} type="email" placeholder="Email" />
      <input className={s.input} type="password" placeholder="Password" />
      <span className={s.checkBoxPlaceholder}>Remember me <input type="checkbox" /></span>
      <Button title={'Login'} onClick={() => {}} />
    </form>
  )
}
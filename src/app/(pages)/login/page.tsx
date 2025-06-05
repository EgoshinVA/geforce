'use client'
import { Button } from '@/components/buttons/Button/Button'
import { useAppSelector } from '@/shared/hooks/appHooks'
import { selectIsAuth } from '@/shared/store/appSlice'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import s from './login.module.scss'
import { useAuth } from '@/shared/hooks/useAuth'
import { useLoginForm } from '@/shared/hooks/useLoginForm'

export default function Login() {
  const { login, isLoading } = useAuth()
  const {
    handleSubmit,
    errors,
    isSubmitting,
    emailRegister,
    passwordRegister,
    rememberMeRegister,
  } = useLoginForm()
  const isAuth = useAppSelector(selectIsAuth)

  useEffect(() => {
    if (isAuth) {
      redirect('/')
    }
  }, [isAuth])

  const onSubmit = handleSubmit(async (data) => {
    await login(data)
  })

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <h2>Authorization</h2>
      <p className={s.credentials}>
        Test account credentials:
        <br />
        Email: free@samuraijs.com
        <br />
        Password: free
      </p>

      <div className={s.inputGroup}>
        <input
          className={s.input}
          type="email"
          placeholder="Email"
          disabled={isSubmitting || isLoading}
          {...emailRegister}
        />
        {errors.email && <p className={s.error}>{errors.email.message}</p>}
      </div>

      <div className={s.inputGroup}>
        <input
          className={s.input}
          type="password"
          placeholder="Password"
          disabled={isSubmitting || isLoading}
          {...passwordRegister}
        />
        {errors.password && <p className={s.error}>{errors.password.message}</p>}
      </div>

      <label className={s.checkboxLabel}>
        <input
          type="checkbox"
          disabled={isSubmitting || isLoading}
          {...rememberMeRegister}
        />
        Remember me
      </label>

      <Button
        title="Login"
        type="submit"
        disabled={isSubmitting || isLoading}
      />
    </form>
  )
}
'use client'
import { useForm } from 'react-hook-form'
import { LoginArgs } from '@/shared/types/loginTypes'

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginArgs>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  const emailRegister = register('email', {
    required: 'Email is required',
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: 'Incorrect email address',
    },
  })

  const passwordRegister = register('password', {
    required: 'Password is required',
    minLength: {
      value: 3,
      message: 'Password must be at least 3 characters',
    },
  })

  const rememberMeRegister = register('rememberMe')

  return {
    register,
    handleSubmit,
    reset,
    errors,
    isSubmitting,
    emailRegister,
    passwordRegister,
    rememberMeRegister,
  }
}
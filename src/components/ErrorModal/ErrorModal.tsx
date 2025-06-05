import s from './ErrorModal.module.scss'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/shared/hooks/appHooks'
import { selectAppError, setError } from '@/shared/store/appSlice'

export const ErrorModal = () => {
  const dispatch = useAppDispatch()
  const onClose = () => {
    dispatch(setError(null))
  }

  const error = useAppSelector(selectAppError)

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      {!!error && (
          <div className={s.content}>
            <h3 className={s.title}>Error</h3>
            <hr />
            {error}
            <button className={s.closeIcon} onClick={onClose}>
              x
            </button>
          </div>
      )}
    </>
  )
}

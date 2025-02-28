import s from './ErrorModal.module.css'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/appHooks'
import { selectAppError, setError } from '@/app/appSlice'

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
        <div className={s.overlay}>
          <div className={s.content}>
            <h3 className={s.title}>Error</h3>
            <hr />
            {error}
            <button className={s.closeIcon} onClick={onClose}>
              x
            </button>
          </div>
        </div>
      )}
    </>
  )
}

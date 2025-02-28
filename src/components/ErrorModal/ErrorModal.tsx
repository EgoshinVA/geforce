import s from './ErrorModal.module.css'
import React, { useEffect } from 'react'

type Props = {
  open: boolean
  onClose: () => void
  errorText: string
}

export const ErrorModal = ({ onClose, open, errorText }: Props) => {
//todo add logic take error tight here
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
      {open && (
        <div className={s.overlay}>
          <div className={s.content}>
            <h3 className={s.title}>Error</h3>
            <hr />
            {errorText}
            <button className={s.closeIcon} onClick={onClose}>
              x
            </button>
          </div>
        </div>
      )}
    </>
  )
}

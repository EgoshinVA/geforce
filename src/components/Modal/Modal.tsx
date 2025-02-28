import s from './Modal.module.css'
import React from 'react'

type Props = {
  open: boolean
  onClose?: () => void
  modalTitle: string
  children: React.ReactNode
}

export const Modal = ({ onClose, open, modalTitle, children }: Props) => {
  return (
    <>
      {open && (
        <div className={s.overlay}>
          <div className={s.content}>
            <h3 className={s.title}>{modalTitle}</h3>
            <hr />
            {children}
            <button className={s.closeIcon} onClick={onClose}>
              x
            </button>
          </div>
        </div>
      )}
    </>
  )
}

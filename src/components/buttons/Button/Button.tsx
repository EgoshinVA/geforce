import React from 'react'
import s from './Button.module.scss'

type Props = {
  title: string
  disabled?: boolean
  active?: boolean
  onClick?: () => void
}

export const Button = ({ title, disabled, active, onClick }: Props) => {
  return (
    <button className={`${s.button} ${active ? s.active : ''}`} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  )
}
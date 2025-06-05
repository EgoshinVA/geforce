import React from 'react'
import s from './Button.module.scss'

type Props = {
  title: string
  disabled?: boolean
  active?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
}

export const Button = ({ title, disabled, active, type, onClick }: Props) => {
  return (
    <button className={`${s.button} ${active ? s.active : ''}`} onClick={onClick} disabled={disabled} type={type}>
      {title}
    </button>
  )
}
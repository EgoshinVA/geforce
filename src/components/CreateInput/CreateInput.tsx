'use client'
import React, { useState } from 'react'
import { Button } from '../buttons/Button/Button'
import s from './CreateInput.module.scss'

type Props = {
  placeholder?: string
  onCLick: (title: string) => void
}

export const CreateInput = ({ placeholder, onCLick }: Props) => {
  const [title, setTitle] = useState<string>('')

  const onClickHandler = () => {
    onCLick(title)
    setTitle('')
  }

  const onEnterCLick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClickHandler()
    }
  }

  return (
    <div className={s.inputGroup}>
      <input onKeyDown={onEnterCLick} className={s.input} value={title} onChange={(e) => setTitle(e.target.value)}
             placeholder={placeholder} />
      <Button title={'+'} onClick={onClickHandler} />
    </div>
  )
}
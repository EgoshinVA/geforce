import React, { useState } from 'react'
import { Button } from '../buttons/Button/Button'
import s from './CreateInput.module.scss'

type Props = {
  onCLick: (title: string) => void
}

export const CreateInput = ({onCLick}: Props) => {
  const [title, setTitle] = useState<string>('')

  const onClickHandler = () => {
    onCLick(title)
    setTitle('')
  }

  return (
    <div className={s.inputGroup}>
      <input className={s.input} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title"/>
      <Button title={'+'} onClick={onClickHandler}/>
    </div>
  )
}
import React, { useState } from 'react'
import s from './EditableTitle.module.scss'

type Props = {
  title: string
  onChange: (title: string) => void
}

export const EditableTitle = ({ title, onChange }: Props) => {
  const [newTitle, setNewTitle] = useState<string>(title)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const changeTitle = () => {
    onChange(newTitle)
  }

  const openTitle = () => {
    setIsOpen(true)
  }

  const closeTitle = () => {
    setIsOpen(false)
    changeTitle()
  }

  const onEnterCLick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    debugger
    if(e.key === 'Enter') {
      changeTitle()
      closeTitle()
    }
  }

  return isOpen ? <input onKeyDown={onEnterCLick} className={s.input} autoFocus onChange={e => setNewTitle(e.currentTarget.value)}
                         value={newTitle}
                         onBlur={closeTitle} /> : <p className={s.title}
                                                     onDoubleClick={openTitle}>{title}</p>
}
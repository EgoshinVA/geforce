import React from 'react'
import s from './RemoveButton.module.scss'
import Image from 'next/image'

type Props = {
  onClick: () => void
}

export const RemoveButton = ({onClick}: Props) => {
  return (
    <button onClick={onClick} className={s.removeButton}>
      <Image src={'/garbage.svg'} alt={'garbage'} width={15} height={15} />
    </button>
  )
}
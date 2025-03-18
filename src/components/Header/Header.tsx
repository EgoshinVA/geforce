'use client'
import s from './Header.module.scss'
import { useLogoutMutation } from '@/services/loginApi'
import { useAppSelector } from '@/hooks/appHooks'
import Image from 'next/image'
import { selectIsAuth } from '@/app/appSlice'
import { ThemeSwitcher } from '@/components/ThemeSwitcher/ThemeSwitcher'

export const Header = () => {
  const [logout] = useLogoutMutation()
  const isAuth = useAppSelector(selectIsAuth)

  const logoutHandler = () => {
    logout()
  }

  return (
    <header className={s.header}>
      <div className={s.headerInfo}>
        <Image src={'logo.svg'} alt={'logout'} width={40} height={40} />
        <ThemeSwitcher />
        {isAuth ? <Image className={s.logout} src={'logout.svg'} alt={'logout'} width={30} height={30}
                         onClick={logoutHandler} /> : <div></div>}
      </div>
    </header>
  )
}
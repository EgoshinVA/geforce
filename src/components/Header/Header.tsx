'use client'
import s from './Header.module.scss'
import { useLogoutMutation } from '@/shared/services/loginApi'
import { useAppSelector } from '@/shared/hooks/appHooks'
import Image from 'next/image'
import { selectIsAuth } from '@/shared/store/appSlice'
import { ThemeSwitcher } from '@/components/ThemeSwitcher/ThemeSwitcher'
import { redirect } from 'next/navigation'

export const Header = () => {
  const [logout] = useLogoutMutation()
  const isAuth = useAppSelector(selectIsAuth)

  const logoutHandler = async () => {
    await logout()
    redirect('/login')
  }

  return (
    <header className={s.header}>
      <div className={s.headerInfo}>
        <Image src={'/logo.svg'} alt={'logout'} width={40} height={40} />
        <ThemeSwitcher />
        {isAuth ? <Image className={s.logout} src={'logout.svg'} alt={'logout'} width={30} height={30}
                         onClick={logoutHandler} /> : <div></div>}
      </div>
    </header>
  )
}
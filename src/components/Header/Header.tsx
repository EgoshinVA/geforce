'use client'
import s from './Header.module.scss'
import { useLogoutMutation } from '@/services/loginApi'
import { ResultCode } from '@/types/enums'
import { baseApi } from '@/app/store/baseApi'
import { useAppDispatch, useAppSelector } from '@/hooks/appHooks'
import Image from 'next/image'
import { selectIsAuth, setIsAuth } from '@/app/appSlice'

export const Header = () => {
  const [logout] = useLogoutMutation()
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector(selectIsAuth)

  const logoutHandler = () => {
    logout().then((res) => {
      if (res.data?.resultCode === ResultCode.Success) {
        dispatch(setIsAuth(false))
        localStorage.removeItem("sn-token")
      }
    }).then(() => {
      dispatch(baseApi.util.invalidateTags(['Todolist', 'Task']))
    })
  }

  return (
    <header className={s.header}>
      <div className={s.headerInfo}>
        <Image src={'logo.svg'} alt={'logout'} width={40} height={40} />
        {isAuth ? <Image className={s.logout} src={'logout.svg'} alt={'logout'} width={30} height={30}
                onClick={logoutHandler} /> : <div></div>}
      </div>
    </header>
  )
}
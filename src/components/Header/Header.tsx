import s from './Header.module.scss'
import { useLogoutMutation } from '@/services/loginApi'
import { ResultCode } from '@/types/enums'
import { baseApi } from '@/app/store/baseApi'
import { useAppDispatch } from '@/hooks/appHooks'
import Image from 'next/image'
import { setIsAuth } from '@/app/appSlice'

export const Header = () => {
  const [logout] = useLogoutMutation()
  const dispatch = useAppDispatch()

  const logoutHandler = () => {
    logout().then(res => {
      if (res.data?.resultCode === ResultCode.Success) {
        localStorage.removeItem('sn-token')
        dispatch(baseApi.util.invalidateTags(['Task', 'Todolist']))
        dispatch(setIsAuth(false))
      }
    })
  }

  return (
    <header className={s.header}>
      <Image src={'logo.svg'} alt={'logout'} width={40} height={40}/>
      <Image className={s.logout} src={'logout.svg'} alt={'logout'} width={30} height={30} onClick={logoutHandler} />
    </header>
  )
}
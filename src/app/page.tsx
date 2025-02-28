'use client'
import { useEffect, useState } from 'react'
import { useMeQuery } from '@/services/loginApi'
import { ResultCode } from '@/types/enums'
import { useAppDispatch } from '@/hooks/appHooks'
import { setIsAuth } from '@/app/appSlice'
import { Modal } from '@/components/Modal/Modal'

export default function Home() {
  const [isInitialized, setIsInitialized] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(true)

  const { data, isLoading } = useMeQuery()
  const dispatch = useAppDispatch()

  const setClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (!isLoading) {
      setIsInitialized(true)
      if (data?.resultCode === ResultCode.Success) {
        dispatch(setIsAuth(true))
      }
    }
  }, [data, isLoading, dispatch])

  return (
    <div>
      {!isInitialized ? <p>Loading...</p> : <p>Success</p>}
      <Modal open={open} onClose={setClose} />
    </div>
  )
}

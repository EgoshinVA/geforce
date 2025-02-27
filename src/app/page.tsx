'use client'
import { useEffect, useState } from 'react'
import { useMeQuery } from '@/services/loginApi'
import { ResultCode } from '@/types/enums'
import { useAppDispatch } from '@/hooks/appHooks'
import { setIsAuth } from '@/app/appSlice'

export default function Home() {
  const [isInitialized, setIsInitialized] = useState<boolean>(false)

  const { data, isLoading } = useMeQuery()
  const dispatch = useAppDispatch()

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
    </div>
  )
}

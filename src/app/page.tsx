'use client'
import { useEffect, useState } from 'react'
import { useMeQuery } from '@/services/loginApi'
import { ResultCode } from '@/types/enums'
import { useAppDispatch } from '@/hooks/appHooks'
import { setIsAuth } from '@/app/appSlice'
import { ErrorModal } from '@/components/ErrorModal/ErrorModal'
import { Main } from '@/components/Main/Main'


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

//todo fix success line
  return (
    <div>
      {!isInitialized ? <p>Loading...</p> : <p>Success</p>}
      <Main/>
      <ErrorModal />
    </div>
  )
}

//todo add container
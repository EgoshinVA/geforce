'use client'
import { useEffect, useState } from 'react'
import { useMeQuery } from '@/services/loginApi'
import { ResultCode } from '@/types/enums'
import { useAppDispatch } from '@/hooks/appHooks'
import { setIsAuth } from '@/app/appSlice'
import { ErrorModal } from '@/components/ErrorModal/ErrorModal'

export default function Home() {
  const [isInitialized, setIsInitialized] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)//todo add global logic

  const { data, isLoading } = useMeQuery()
  const dispatch = useAppDispatch()

  const setClose = () => {
    setError(null)
  }

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
      {error && <ErrorModal open={!!error} onClose={setClose} errorText={error} />}
    </div>
  )
}

//todo add container
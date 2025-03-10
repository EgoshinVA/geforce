'use client'
import React, { useEffect, useState } from 'react'
import { useMeQuery } from '@/services/loginApi'
import { ResultCode } from '@/types/enums'
import { useAppDispatch } from '@/hooks/appHooks'
import { setIsAuth } from '@/app/appSlice'
import { Main } from '@/components/Main/Main'
import Image from 'next/image'
import { Header } from '@/components/Header/Header'

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
    <div style={{ display: 'flex' }}>
      {isInitialized ? <Main /> :
        <Image style={{ margin: '0 auto' }} src={'loader.svg'} alt={'loader'} width="1000" height="1000" />}
    </div>
  )
}
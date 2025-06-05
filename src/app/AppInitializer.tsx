'use client'
import React, { useEffect } from 'react'
import { useMeQuery } from '@/shared/services/loginApi'
import { ResultCode } from '@/shared/types/enums'
import { useAppDispatch } from '@/shared/hooks/appHooks'
import { setIsAuth } from '@/shared/store/appSlice'
import { ErrorModal } from '@/components/ErrorModal/ErrorModal'

export const AppInitializer = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading } = useMeQuery()

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isLoading) {
      if (data?.resultCode === ResultCode.Success) {
        dispatch(setIsAuth(true))
      }
    }
  }, [data, isLoading, dispatch])

  return <>
    {children}
    <ErrorModal />
  </>
}
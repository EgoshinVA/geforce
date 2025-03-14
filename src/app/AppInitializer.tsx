'use client';

import React, { useEffect, useState } from 'react';
import { useMeQuery } from '@/services/loginApi';
import { ResultCode } from '@/types/enums';
import { useAppDispatch } from '@/hooks/appHooks';
import { setIsAuth } from '@/app/appSlice';
import Image from 'next/image';

export const AppInitializer = ({ children }: { children: React.ReactNode }) => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const { data, isLoading } = useMeQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLoading) {
      setIsInitialized(true);
      if (data?.resultCode === ResultCode.Success) {
        dispatch(setIsAuth(true));
      }
    }
  }, [data, isLoading, dispatch]);

  if (!isInitialized) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Image src="/loader.svg" alt="loader" width={100} height={100} />
      </div>
    );
  }

  return <>{children}</>;
};
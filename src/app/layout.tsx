'use client'
import { Geist_Mono, Sigmar } from 'next/font/google'
import './globals.module.scss'
import StoreProvider from '@/app/store/StoreProvider'
import React from 'react'
import { Header } from '@/components/Header/Header'
import s from './globals.module.scss'
import Head from 'next/head'
import { AppInitializer } from '@/app/AppInitializer'

const SigmarFont = Sigmar({
  variable: '--font-sigmar-mono',
  weight: '400',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Head>
      <title>Todolist</title>

    </Head>
    <body className={`${SigmarFont.variable} ${geistMono.variable} antialiased`}>
    <StoreProvider>
      <AppInitializer>
        <Header />
        <div className={s.container}>
          {children}
        </div>
      </AppInitializer>
    </StoreProvider>
    </body>
    </html>
  )
}
//todo meta tags
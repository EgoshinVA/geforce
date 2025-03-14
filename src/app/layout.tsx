import { Geist_Mono, Sigmar } from 'next/font/google'
import './global.scss'
import StoreProvider from '@/app/store/StoreProvider'
import React from 'react'
import { Header } from '@/components/Header/Header'
import Head from 'next/head'
import { AppInitializer } from '@/app/AppInitializer'
import s from './app.module.scss'

const SigmarFont = Sigmar({
  variable: '--font-sigmar-mono',
  weight: '400',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Todolist',
  description: 'Todolist app',
  keywords: ['todolist', 'Egoshin']
}

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
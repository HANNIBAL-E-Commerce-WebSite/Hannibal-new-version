import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';
import {UserWrapper} from '@/context/userContext'
import Header from './Header/page';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserWrapper>
         
        {children}
        </UserWrapper>
   
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import Header from '@/app/Header/page';
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
        <Header/>
        {children}
   
      </body>
    </html>
  )
}

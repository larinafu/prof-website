// import './globals.css'
import { Inter } from 'next/font/google'

import ThemeProvider from './_contexts/theme-provider'
import Navbar from './_components/navbar/navbar'
import Footer from './_components/navbar/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Larina Fu\'s Portfolio Website',
  description: 'Larina Fu\'s Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  )
}

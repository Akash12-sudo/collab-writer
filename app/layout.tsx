import './globals.css'
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { dark, neobrutalism, shadesOfPurple } from '@clerk/themes'
import Provider from './Provider'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'CollabEditor',
  description: 'Your go-to live collaborative editor',
}

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (

      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
          <ClerkProvider
            appearance={{
              baseTheme: shadesOfPurple,
              variables: { 
                colorPrimary: '#3371FF',
                fontSize: '16px'
              },
            }}
          >
            <Provider>
              {children}
            </Provider>
          </ClerkProvider>
        </body>
      </html>

    
  )
}

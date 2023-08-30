'use client'
import Header from '@/components/header';
import './globals.css';
import type { Metadata } from 'next';
import { jost } from './fonts';
import Footer from '@/components/footer';
import { Suspense } from 'react';
import { NavigationEvents } from '@/components/utils';
import NextTopLoader from 'nextjs-toploader';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'; 
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
const queryClient = new QueryClient()
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  return (
    <QueryClientProvider client={queryClient}>
      <html className='scroll-smooth' lang="en">
        <body className={jost.className}>
        <ProgressBar
          height="4px"
          color="#c214fc"
          options={{ showSpinner: false }}
          shallowRouting
        />
          <Header/>
          {children}
          <Footer/>
          <Suspense fallback={null}>
            <NavigationEvents />
          </Suspense>
        </body>
      </html>
    </QueryClientProvider>
  )
}
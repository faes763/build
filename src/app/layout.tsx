'use client'
import Header from '@/components/header';
import './globals.css';
import { jost } from './fonts';
import Footer from '@/components/footer';
import { Suspense } from 'react';
import { NavigationEvents } from '@/components/utils';
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
        
          <Suspense fallback={null}>
            <NavigationEvents />
          </Suspense>
          <span className="fixed flex right-10 bottom-10 h-5 w-5 cursor-pointer">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-green-600"></span>
        </span>
        </body>
      </html>
    </QueryClientProvider>
  )
}
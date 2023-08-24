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
export const metadata: Metadata = {
  title: 'BuildAssistant',
  description: 'Сделайте ремонт проще и удобнее с уникальной экосистемой нашей компании. Независимо от того, нужен вам ремонт в доме, квартире или на даче, вы больше не будете тратить время на поиск подходящего исполнителя и переговоры. Просто оставьте запрос на нашем сайте, и ваше предложение отправится на аукцион, где предприниматели смогут ознакомиться с ним и предложить свою денежную оценку выполнения работ. Выберите лучшего исполнителя, заключите договор и начните воплощать свои идеи в жизнь. Наша экосистема обеспечивает прозрачность и конкуренцию, что позволяет получить наилучший результат по наилучшей цене. Мы гарантируем качество и надежность работы исполнителей, чтобы ваш ремонт прошел без проблем и задержек. Присоединяйтесь к нашей экосистеме и удовлетворите свои потребности в высококачественном ремонте',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  return (
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
  )
}
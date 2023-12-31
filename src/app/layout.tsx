import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as RobotoFlex,
  Roboto_Mono as RobotoMono,
  Jacques_Francois_Shadow as JacquesFracoisShadow,
} from 'next/font/google'
import { Header } from '@/components/Header'
import { Profile } from '@/components/Profile'

const roboto = RobotoFlex({ subsets: ['latin'], variable: '--font-roboto' })
const robotoMono = RobotoMono({
  subsets: ['latin'],
  variable: '--font-robotoMono',
})
const jacquesFracoisShadow = JacquesFracoisShadow({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jacquesFracois',
})

export const metadata = {
  title: 'Github Feed',
  description: 'Repository list',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoMono.variable} ${jacquesFracoisShadow.variable} font-sans bg-brown-300`}
      >
        <main className="grid place-items-center m-4 ">
          <Header />

          <div className="flex max-w-[1120px] w-full gap-8 items-start mt-8">
            <Profile />

            <div className="flex-1">{children}</div>
          </div>
        </main>
      </body>
    </html>
  )
}

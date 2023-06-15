import { Clientonly } from './Components/Clientonly'
import { Modals } from './Components/Modals/Modals'
import { Navbar } from './Components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Clientonly>
          <Modals  title="Hello World" isOpen/>
        <Navbar/>
        </Clientonly>
        {children}
        </body>
    </html>
  )
}

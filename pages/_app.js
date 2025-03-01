import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from 'recoil'
import ConnectionOffline from '../Components/Exception Handling/ConnectionOffline'
export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ConnectionOffline>
      <SessionProvider session={session}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </SessionProvider>
    </ConnectionOffline>
  )
}

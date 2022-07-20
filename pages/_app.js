import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from 'recoil'
<<<<<<< HEAD
import ConnectionOffline from '../Components/ConnectionOffline/ConnectionOffline'
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
=======

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  )
}
>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8

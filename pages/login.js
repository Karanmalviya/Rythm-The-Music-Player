import { getProviders, signIn } from 'next-auth/react'
import Image from 'next/image'
import Head from 'next/head'
import rythmlogo from '../public/rythmlogo1.png'

export default function login({ providers }) {
  console.log(providers)

  return (
    <div className="flex min-h-screen w-full select-none flex-col items-center justify-center bg-black">
      <Head>
        <title>Rythm</title>
        <link rel="icon" href="rythmlogo.ico" />
      </Head>
      <Image
        draggable="false"
        className="mb-5 p-5"
        src={rythmlogo}
        width="150px"
        height="150px"
      />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            className="rounded-full bg-red-600 p-2 font-bold text-black"
          >
            Login with Rythm
            {/* Login with {provider.name} */}
          </button>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}

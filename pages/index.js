import Head from 'next/head'
import Sidebar from '../Components/Sidebar'
import Player from '../Components/Player'
import Playlist from '../Components/Playlist'
import LikedSong from '../Components/LikedSong'
import Library from '../Components/Library'
import Center from '../Components/Center'
import { getSession } from 'next-auth/react'
import Rightleftarrow from '../Components/Rightleftarrow'
import Accountlogo from '../Components/Accountlogo'
import Search from '../Components/Search'
import React, { useEffect, useState } from 'react'
import Loading from '../Components/loader'
import Demo from '../Components/demo'
import MusicPlayer from '../Components/MusicPlayer'

export default function Home() {
  let [comp, setComp] = useState('')

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  // return <div>{loading ? "loading..." : "hello"}</div>;

  const handleCenter = () => {
    setComp('Center')
  }
  const handleSearch = () => {
    setComp('Search')
  }
  const handleLiked = () => {
    setComp('Liked')
  }
  const handleLibrary = () => {
    setComp('Library')
  }
  const handlePlaylist = () => {
    setComp('Playlist')
  }
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="h-screen overflow-hidden bg-black">
          <Head>
            <title>Rythm</title>
            <link rel="icon" href="rythmlogo.ico" />
          </Head>
          <main className="flex">
            <Sidebar
              showCenter={handleCenter}
              showSearch={handleSearch}
              showLiked={handleLiked}
              showLibrary={handleLibrary}
              showPlaylist={handlePlaylist}
            />
            <Accountlogo />
            {(() => {
              switch (comp) {
                case 'Search':
                  return <Search />
                case 'Liked':
                  return <LikedSong />
                case 'Library':
                  return <Library />
                case 'Playlist':
                  return <Demo />
                default:
                  return <Center />
              }
            })()}

            <Rightleftarrow />
          </main>

          <div className="sticky bottom-0">
            {/* <Player /> */}
            {/* <MusicPlayer/> */}
          </div>
        </div>
      )}
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session,
    },
  }
}

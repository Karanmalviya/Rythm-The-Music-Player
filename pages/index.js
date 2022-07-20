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
<<<<<<< HEAD
import Firebase from '../Components/Firebase_music/Firebase_music'
=======
>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8

export default function Home() {
  let [comp, setComp] = useState('')

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  // return <div>{loading ? "loading..." : "hello"}</div>;

<<<<<<< HEAD
  const [player, setPlayer] = useState(true)

  const handleCenter = () => {
    setComp('Center')
    setPlayer(true)
  }
  const handleSearch = () => {
    setComp('Search')
    setPlayer(true)
  }
  const handleLiked = () => {
    setComp('Liked')
    setPlayer(true)
  }
  const handleLibrary = () => {
    setComp('Library')
    setPlayer(true)
  }
  const handlePlaylist = () => {
    setComp('Playlist')
    setPlayer(true)
  }
  const handleFirebase = () => {
    setComp('Firebase')
    setPlayer(true)
  }
  const handlePlayer = () => {
    setPlayer(false)
=======
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
>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8
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
<<<<<<< HEAD
              showfire={handleFirebase}
              setPlayer={handlePlayer}
=======
>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8
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
                  return <Playlist />
<<<<<<< HEAD
                case 'Firebase':
                  return <Firebase />
=======
>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8
                default:
                  return <Center />
              }
            })()}

            <Rightleftarrow />
          </main>

          <div className="sticky bottom-0">
<<<<<<< HEAD
            {/* <Player /> */}
            {/* <MusicPlayer/> */}

            {player ? <Player /> : null}
=======
            <Player />
>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8
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
<<<<<<< HEAD


=======
>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8

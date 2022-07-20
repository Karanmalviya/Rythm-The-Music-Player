import { useEffect } from 'react'
import { shuffle } from 'lodash'
import { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
<<<<<<< HEAD
import { playlistIdState, playlistState ,likedIdState} from '../Atoms/PlayListAtom'
=======
import { playlistIdState, playlistState } from '../Atoms/PlayListAtom'
>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8
import useSpotify from '../Hooks/useSpotify'
import Songs from '../Components/Songs'
import IMAGES from '../public/images/images.js'
import Image from 'next/image'
<<<<<<< HEAD
import Title from './TItle'
=======

>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8

export default function LikedSong() {
  // const { data: session } = useSession()
  const spotifyApi = useSpotify()
<<<<<<< HEAD
  const likedplaylistId = useRecoilValue(likedIdState)
  const [playlist, setPlaylist] = useRecoilState(playlistState)

  useEffect(() => {
    spotifyApi
      .getPlaylist(likedplaylistId)
=======
  const playlistId = useRecoilValue(playlistIdState)
  const [playlist, setPlaylist] = useRecoilState(playlistState)

 
  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8
      .then((data) => {
        setPlaylist(data.body)
      })
      .catch((err) => console.log('Something went wrong!', err))
<<<<<<< HEAD
  }, [spotifyApi, likedplaylistId])
  // console.log(playlist)
=======
  }, [spotifyApi, playlistId])
  console.log(playlist)
>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8

  return (
    <div className="h-screen flex-grow select-none overflow-y-scroll text-white scrollbar-hide">
      <section
        className={`flex h-80 items-end space-x-7 bg-gradient-to-b from-indigo-500  to-black p-5 text-white`}
      >
        {/* <img
          className="h-44 w-44 shadow-2xl"
          src={playlist?.images?.[0]?.url}
          alt=""
        /> */}
<<<<<<< HEAD
        <div className="shadow-2xl">
          <Image src={IMAGES.logoliked} alt="" height={150} width={150} />
        </div>
=======
        <Image className="h-44 w-44 shadow-2xl" src={IMAGES.logoliked} alt="" />
>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8

        <div>
          <p>Playlist</p>
          <h1 className="text-3xl font-bold md:text-3xl xl:text-5xl">
            Liked Songs
          </h1>
          <p className="font-thick mt-3 text-sm">138 Songs</p>
        </div>
      </section>
<<<<<<< HEAD
      <div className=''><Title/></div>
=======
>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8
      <div className="mb-20">
        <Songs />
      </div>
    </div>
  )
}

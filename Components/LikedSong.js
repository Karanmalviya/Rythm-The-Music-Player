import { useEffect } from 'react'
import { shuffle } from 'lodash'
import { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { playlistIdState, playlistState } from '../Atoms/PlayListAtom'
import useSpotify from '../Hooks/useSpotify'
import Songs from '../Components/Songs'
import IMAGES from '../public/images/images.js'
import Image from 'next/image'

export default function LikedSong() {
  // const { data: session } = useSession()
  const spotifyApi = useSpotify()
  const playlistId = useRecoilValue(playlistIdState)
  const [playlist, setPlaylist] = useRecoilState(playlistState)

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data.body)
      })
      .catch((err) => console.log('Something went wrong!', err))
  }, [spotifyApi, playlistId])
  console.log(playlist)

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
        <div className="shadow-2xl">
          <Image src={IMAGES.logoliked} alt="" height={150} width={150} />
        </div>

        <div>
          <p>Playlist</p>
          <h1 className="text-3xl font-bold md:text-3xl xl:text-5xl">
            Liked Songs
          </h1>
          <p className="font-thick mt-3 text-sm">138 Songs</p>
        </div>
      </section>
      <div className="mb-20">
        <Songs />
      </div>
    </div>
  )
}

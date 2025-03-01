// import { signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { shuffle } from 'lodash'
import { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { playlistIdState, playlistState } from '../Atoms/PlayListAtom'
import useSpotify from '../Hooks/useSpotify'
import Songs from '../Components/Songs'

const colors = [
  'from-indigo-500',
  'from-blue-500',
  'from-green-500',
  'from-red-500',
  'from-yellow-500',
  'from-pink-500',
  'from-purple-500',
  'from-red-500',
]

export default function Playlist() {
  // const { data: session } = useSession()
  const spotifyApi = useSpotify()
  const [color, setColor] = useState(null)
  const playlistId = useRecoilValue(playlistIdState)
  const [playlist, setPlaylist] = useRecoilState(playlistState)

  useEffect(() => {
    setColor(shuffle(colors).pop())
  }, [playlistId])

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
        className={`flex h-80 items-end space-x-7 bg-gradient-to-b to-black  p-5 ${color} text-white`}
      >
        <img
          className="h-44 w-44 shadow-2xl playlist-image"
          src={playlist?.images?.[0]?.url}
          alt=""
        />
        <div>
          <p>PLAYLIST</p>
          <h1 className="text-2xl font-bold md:text-3xl xl:text-5xl">
            {playlist?.name}{' '}
          </h1>
        </div>
      </section>
      <div className="mb-20">
        <Songs />
      </div>
    </div>
  )
}

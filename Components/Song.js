import React from 'react'
import { useRecoilState } from 'recoil'
import useSpotify from '../Hooks/useSpotify'
import millisToMinutesAndSeconds from '../lib/time'
import { currentTrackIdState, isPlayingState } from '../Atoms/SongAtom'
import { HeartIcon } from '@heroicons/react/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid'
// import SongFire from '../Components/SongFire'

export default function Song({ order, track }) {
  const spotifyApi = useSpotify()
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState)
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)

  const playSong = () => {
    setCurrentTrackId(track.track.id)
    setIsPlaying(true)
    spotifyApi.play({
      uris: [track.track.uri],
    })
  }
const favourite=true
  return (
    <div
      onClick={playSong}
      className="grid select-none grid-cols-2 scroll-smooth rounded-lg py-2 px-4 text-gray-500 hover:bg-gray-900"
    >
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img
          className="h-10 w-10"
          src={track.track.album.images[0].url}
          alt=""
        />
        <div className="truncate">
          <p className="w-30 m-2 truncate text-white lg:w-64">
            {track.track.name}
          </p>
          <p className="w-30  m-2">{track.track.artists[0].name}</p>
        </div>
      </div>
      <div className="ml-auto flex items-center justify-between md:ml-0">
        <p className="hidden w-40 truncate md:inline">
          {track.track.album.name}
        </p>
        <p>{millisToMinutesAndSeconds(track.track.duration_ms)}</p>
        <div className="h-5 w-5 text-green-600">
          {favourite ? <HeartIcon /> : <HeartIconSolid />}
        </div>
      </div>
    </div>
  )
}

import { useRecoilState } from 'recoil'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { currentTrackIdState, isPlayingState } from '../Atoms/SongAtom'
import useSpotify from '../Hooks/useSpotify'
import useSongInfo from '../Hooks/useSongInfo'
import { VolumeUpIcon as VolumeDownIcon } from '@heroicons/react/outline'
import {
  FastForwardIcon,
  RewindIcon,
  PauseIcon,
  PlayIcon,
  ReplyIcon,
  VolumeUpIcon,
  SwitchHorizontalIcon,
} from '@heroicons/react/solid'

export default function Player() {
  const spotifyApi = useSpotify()
  const { data: session, status } = useSession()
  const [currentTrackId, setCurrentIdTrack] =
    useRecoilState(currentTrackIdState)
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
  const [volume, setVolume] = useState(50)

  const songInfo = useSongInfo()

  const fetchCurrentSong = () => {
    if (!songInfo) {
      spotifyApi.getMyCurrentPlayingTrack().then((data) => {
        console.log('Now Playing', data.body?.item)
        setCurrentIdTrack(data.body?.item?.id)

        spotifyApi.getMyCurrentPlaybackState().then((data) => {
          setIsPlaying(data.body?.is_playing)
        })
      })
    }
  }

  const handlePlayPause = () => {
    spotifyApi.getMyCurrentPlaybackState().then((data) => {
      if (data?.body?.is_playing) {
        spotifyApi.pause()
        setIsPlaying(false)
      } else {
        spotifyApi.play()
        setIsPlaying(true)
      }
    })
  }

  useEffect(() => {
    if (spotifyApi.getAccessToken() && !currentTrackId) {
      //fetch the song info
      fetchCurrentSong()
      setVolume(50)
    }
  }, [currentTrackIdState, spotifyApi, session])

  return (
    <div
      className="grid h-20 grid-cols-3 bg-gradient-to-b from-black 
    to-gray-900 px-2 text-xs text-white md:px-8 md:text-base 
    grid-col-0 divide-y divide-gray-800"
    >
      {/* Left */}
      <div className="flex items-center space-x-4">
        <img
          className="hidden h-10 w-10 md:inline"
          src={songInfo?.album?.images?.[0]?.url}
          alt=""
        />
        <div>
          <h3>{songInfo?.name}</h3>
          <p>{songInfo?.artists?.[0]?.name}</p>
        </div>
        
      </div>

      {/* Center */}
      <div className="item-center flex justify-evenly p-5">
        <SwitchHorizontalIcon className="button" />
        <RewindIcon
          // onClick={() => spotifyApi.skipToNext()}
          // The API is not wotking
          className="button"
        />

        {isPlaying ? (
          <PauseIcon onClick={handlePlayPause} className="button h-10 w-10" />
        ) : (
          <PlayIcon onClick={handlePlayPause} className="button h-10 w-10" />
        )}

        <FastForwardIcon
          // onClick={() => spotifyApi.skipToNext()}
          // The API is not wotking
          className="button"
        />
        <ReplyIcon className="button" />
      </div>

      {/* Right */}
      <div className="flex items-center justify-end space-x-3 pr-5 md:space-x-4">
        <VolumeDownIcon
          onClick={() => volume > 0 && setVolume(volume - 10)}
          className="button-volume"
        />
        <input
          className="w-14 md:w-20"
          type="range"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          min={0}
          max={100}
        />
        <VolumeUpIcon
          onClick={() => volume < 100 && setVolume(volume + 10)}
          className="button-volume"
        />
      </div>
    </div>
  )
}

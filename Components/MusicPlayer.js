import { useRecoilState } from 'recoil'
import { useEffect, useState, useRef } from 'react'
import { currentTrackIdState, isPlayingState } from '../Atoms/SongAtom'

import useSongInfo from '../Hooks/useSongInfo'
import {
  HeartIcon,
  VolumeUpIcon as VolumeDownIcon,
} from '@heroicons/react/outline'
import {
  FastForwardIcon,
  RewindIcon,
  PauseIcon,
  PlayIcon,
  ReplyIcon,
  VolumeUpIcon,
  SwitchHorizontalIcon,
} from '@heroicons/react/solid'

export default function MusicPlayer({
  song,
  imgSrc,
  songname,
  songartist,
  auto,
}) {
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
  const [volume, setVolume] = useState(50)
  const [isLove, setLoved] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const audioPlayer = useRef() //Our audio tag
  const progressBar = useRef() //Our progress bar
  const animationRef = useRef() //Our animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration)
    setDuration(seconds)
    // set max prop with out seconds in input[range]
    progressBar.current.max = seconds
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

  const changePlayPause = () => {
    const prevvalue = isPlaying
    if ((prevvalue = isPlaying)) {
      audioPlayer.current.play()
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current.pause()
      cancelAnimationFrame(animationRef.current)
    }
    setIsPlaying(!prevvalue)
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime
    changeCurrentTime()
    // need to run more than once
    animationRef.current = requestAnimationFrame(whilePlaying)
  }

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60)
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`
    const seconds = Math.floor(sec % 60)
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`
    return `${returnMin} : ${returnSec}`
  }

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      '--played-width',
      `${(progressBar.current.value / duration) * 100}%`
    )
    setCurrentTime(progressBar.current.value)
  }

  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value
    changeCurrentTime()
  }

  const changeLoved = () => {
    setLoved(!isLove)
  }

  const songInfo = useSongInfo()
  return (
    <div className="fixed bottom-0">
      <div className="bg-black">
        <div className="mx-3 flex gap-x-2">
          <div>{calculateTime(currentTime)}</div>

          <input
            type="range"
            className="progressBar"
            ref={progressBar}
            onChange={changeProgress}
            defaultValue="0"
            autoPlay={auto}
            class="mt-3 h-[0.1rem] w-[72rem] bg-gray-400 text-green-500"
          />

          <div className="">
            {duration && !isNaN(duration) && calculateTime(duration)
              ? duration && !isNaN(duration) && calculateTime(duration)
              : '00:00'}
          </div>
        </div>
        <audio src={song} preload="metadata" ref={audioPlayer} />
      </div>
      <div
        className="grid-col-0 grid h-20 grid-cols-3  
     bg-gradient-to-b from-black to-gray-900 px-2 text-xs 
    text-white md:px-8 md:text-base"
      >
        {/* Left */}
        <div className="flex items-center space-x-4">
          <img className="hidden h-10 w-10 md:inline" src={imgSrc} alt="" />
          <div>
            <h3 className="text-white">{songname}</h3>
            <p className="text-xs text-gray-500">{songartist}</p>
          </div>
        </div>

        {/* <div className="h-5 w-5 m-0">
        <HeartIcon />
      </div> */}
        {/* Center */}
        <div className="item-center flex justify-evenly p-5">
          <SwitchHorizontalIcon className="button" />
          <RewindIcon
            // onClick={() => spotifyApi.skipToNext()}
            // The API is not wotking
            className="button"
          />
          <div onClick={changePlayPause}>
            {isPlaying ? (
              <PlayIcon className="button h-10 w-10" />
            ) : (
              <PauseIcon className="button h-10 w-10" />
            )}
          </div>

          <FastForwardIcon className="button" />
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
    </div>
  )
}

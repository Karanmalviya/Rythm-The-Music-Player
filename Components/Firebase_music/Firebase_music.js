import React, { useEffect, useRef, useState } from 'react'
import { shuffle } from 'lodash'
import SongFire from './SongFire'
import { HeartIcon } from '@heroicons/react/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid'
import MusicPlayer from './MusicPlayer'
import Image from 'next/image'
import IMAGES from '../../public/images/images'
import TItle from '../TItle'
export default function Firebase() {
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

  const [Songs, setSongsFire] = useState(SongFire)
  const [song, setSong] = useState(SongFire[0].song)
  const [img, setImage] = useState(SongFire[0].imgSrc)
  const [songNameU, setSongName] = useState(SongFire[0].songName)
  const [songArtist, setSongArtist] = useState(SongFire[0].artist)
  const [auto, setAuto] = useState(false)

  const [color, setColor] = useState(null)

  const changeFavorite = (id) => {
    SongFire.forEach((song) => {
      if (song.id === id) {
        song.favourite = !song.favourite
      }
    })
    setSongsFire([...SongFire])
  }
console.log(song)
  useEffect(() => {
    setColor(shuffle(colors).pop())
  }, [])

  const setMainSong = (songSrc, imgSrc, songname, songartist) => {
    setSong(songSrc)
    setImage(imgSrc)
    setSongName(songname)
    setSongArtist(songartist)
    setAuto(true)
  }

  return (
    <div className="h-screen flex-grow select-none overflow-y-scroll text-white scrollbar-hide">
      <section
        className={`flex h-80 items-end space-x-7 bg-gradient-to-b to-black  p-5 ${color} text-white`}
      >
        <div className="playlist-image h-44 w-44 shadow-2xl">
          <Image src={IMAGES.logoromantic} alt="" />
        </div>
        <div>
          <p>Party Hits</p>
          <h1 className="text-2xl font-bold md:text-3xl xl:text-5xl"> </h1>
          <p className="text-xs text-gray-400">{Songs.length} Songs</p>
        </div>
      </section>
      <div>
        <TItle />
      </div>
      <div className="mb-24 mt-3 gap-y-4">
        {/* <Songs /> */}
        {Songs &&
          Songs.map((song, index) => (
            <div
              key={song?.id}
              onClick={() =>
                setMainSong(
                  song?.song,
                  song?.imgSrc,
                  song?.songName,
                  song?.artist
                )
              }
              className="grid select-none grid-cols-2 scroll-smooth rounded-lg py-5 px-10 text-gray-500 hover:bg-gray-900"
            >
              <div className="flex items-center space-x-4">
                <p>{index + 1}</p>
                <img className="h-10 w-10" src={song.imgSrc} alt="" />
                <div className="truncate">
                  <p className="w-30 m-2 truncate text-white lg:w-64">
                    {song.songName}
                  </p>
                </div>
              </div>
              <div className="ml-auto flex items-center justify-between md:ml-0">
                <p className="hidden w-40 truncate md:inline">{song.artist}</p>
                {/* <p>{millisToMinutesAndSeconds(song.artist)}</p> */}

                <div>{song?.song.duration}</div>
                <div
                  onClick={() => changeFavorite(song?.id)}
                  className="h-5 w-5 cursor-pointer text-green-600 shadow "
                >
                  {song?.favourite ? <HeartIconSolid /> : <HeartIcon />}
                </div>
              </div>
            </div>
          ))}
      </div>
      <MusicPlayer
        song={song}
        imgSrc={img}
        songname={songNameU}
        songartist={songArtist}
        autoplay={auto}
      />
    </div>
  )
}

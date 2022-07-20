import logo from '../public/rythmlogo.png'
import Image from 'next/image'
<<<<<<< HEAD
import {
  SearchIcon,
  LibraryIcon,
  HomeIcon,
  FireIcon,
} from '@heroicons/react/outline'
import {
  HomeIcon as HomeIconSolid,
  HeartIcon,
  PlusCircleIcon,
  SearchIcon as SearchIconSolid,
  LibraryIcon as LibraryIconSolid,
  FireIcon as FireIconSolid,
} from '@heroicons/react/solid'
=======
import { SearchIcon, LibraryIcon } from '@heroicons/react/outline'
import { HomeIcon, HeartIcon, PlusCircleIcon } from '@heroicons/react/solid'
>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8
import { signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { playlistIdState } from '../Atoms/PlayListAtom'
import useSpotify from '../Hooks/useSpotify'

export default function Sidebar(props) {
  const spotifyApi = useSpotify()
  const { data: session, status } = useSession()
  const [playlists, setPlaylists] = useState([])
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState)

<<<<<<< HEAD
  // console.log('You picked Playlist >>>', playlistId)
=======
  console.log('You picked Playlist >>>', playlistId)
>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items)
      })
    }
  }, [session, spotifyApi])
<<<<<<< HEAD
  const [HomeClick, setHomeClick] = useState(true)
  const [Searchclick, setSearchClick] = useState(false)
  const [LibraryClick, setLibraryClick] = useState(false)
  const [PlaylistClick, setPlaylistClick] = useState(false)
  const [LikedClick, setLikedClick] = useState(false)
  const [FireClick, setFireClick] = useState(false)
  
  const handleC = () => {
    props.showCenter()
    setHomeClick(true)
    setSearchClick(false)
    setLibraryClick(false)
    setPlaylistClick(false)
    setLikedClick(false)
    setFireClick(false)
  }
  const handleS = () => {
    props.showSearch()
    setSearchClick(true)
    setHomeClick(false)
    setLibraryClick(false)
    setPlaylistClick(false)
    setLikedClick(false)
    setFireClick(false)
  }
  const handleL = () => {
    props.showLibrary()
    setLibraryClick(true)
    setHomeClick(false)
    setSearchClick(false)
    setPlaylistClick(false)
    setLikedClick(false)
    setFireClick(false)
  }
  const handleCP = () => {
    props.showPlaylist()
    setPlaylistClick(true)
    setHomeClick(false)
    setSearchClick(false)
    setLibraryClick(false)
    setLikedClick(false)
    setFireClick(false)
  }
  const handleLS = () => {
    props.showLiked()
    setLikedClick(true)
    setHomeClick(false)
    setSearchClick(false)
    setLibraryClick(false)
    setPlaylistClick(false)
    setFireClick(false)
  }
  const handleF = () => {
    props.showfire()
    setFireClick(true)
    setHomeClick(false)
    setSearchClick(false)
    setLibraryClick(false)
    setPlaylistClick(false)
    setLikedClick(false)
    props.setPlayer()
=======

  const handleC = () => {
    props.showCenter()
  }
  const handleS = () => {
    props.showSearch()
  }
  const handleL = () => {
    props.showLibrary()
  }
  const handleCP = () => {
    props.showPlaylist()
  }
  const handleLS = () => {
    props.showLiked()
>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8
  }

  return (
    <div className="text-bold hidden select-none flex-wrap border-r border-gray-900 p-5 pb-36 text-xs text-gray-400 scrollbar-hide sm:max-w-[12rem] md:inline-flex lg:max-w-[15rem] lg:text-base">
      <div className="flex-grow-0 space-y-3">
        <Image
          src={logo}
          className=""
          width={120}
          height={30}
          draggable="false"
        />
        <hr className="boder-t-[0.1px] space-x-2 border-black" />
        <button
          className="flex items-center space-x-2 font-semibold hover:text-white"
          onClick={handleC}
        >
<<<<<<< HEAD
          {HomeClick ? (
            <>
              <HomeIconSolid className="sidebar-container h-5 w-5 text-white" />
              <p className="text-white">Home</p>
            </>
          ) : (
            <>
              <HomeIcon className="sidebar-container h-5 w-5 " />
              <p>Home</p>
            </>
          )}
=======
          <HomeIcon className="sidebar-container h-5 w-5" />
          <p>Home</p>
>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8
        </button>
        <button
          className="flex items-center space-x-2 font-semibold hover:text-white"
          onClick={handleS}
        >
<<<<<<< HEAD
          {Searchclick ? (
            <>
              <SearchIconSolid className="sidebar-container h-5 w-5 text-white" />
              <p className="text-white">Search</p>
            </>
          ) : (
            <>
              <SearchIcon className="sidebar-container h-5  w-5" />
              <p>Search</p>
            </>
          )}
=======
          <SearchIcon className="sidebar-container h-5  w-5" />
          <p>Search</p>
>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8
        </button>
        <button
          className="flex items-center space-x-2 font-semibold hover:text-white"
          onClick={handleL}
        >
<<<<<<< HEAD
          {LibraryClick ? (
            <>
              <LibraryIconSolid className="sidebar-container h-5 w-5 text-white" />
              <p className="text-white">Library</p>
            </>
          ) : (
            <>
              <LibraryIcon className="sidebar-container h-5  w-5" />
              <p>Library</p>
            </>
          )}
=======
          <LibraryIcon className="sidebar-container h-5  w-5" />
          <p>Library</p>
>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8
        </button>
        <hr className="boder-t-[0.1px] border-black" />
        <button
          className="flex items-center space-x-2 font-semibold hover:text-white"
          onClick={handleCP}
        >
<<<<<<< HEAD
          {PlaylistClick ? (
            <>
              <PlusCircleIcon className="sidebar-container h-5  w-5 text-white" />
              <p className="text-white">Playlist</p>
            </>
          ) : (
            <>
              <PlusCircleIcon className="sidebar-container h-5  w-5" />
              <p>Playlist</p>
            </>
          )}
=======
          <PlusCircleIcon className="sidebar-container h-5  w-5" />
          <p>Create Playlist</p>
>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8
        </button>
        <button
          className="flex items-center space-x-2 font-semibold text-blue-500 hover:text-white"
          onClick={handleLS}
        >
<<<<<<< HEAD
          {LikedClick ? (
            <>
              <HeartIcon className="sidebar-container h-5  w-5 text-red-500" />
              <p className="text-red-400">Liked Songs</p>
            </>
          ) : (
            <>
              <HeartIcon className="sidebar-container h-5  w-5" />
              <p>Liked Songs</p>
            </>
          )}
        </button>
        <button
          className="flex items-center space-x-2 font-semibold hover:text-white"
          onClick={handleF}
        >
          {FireClick ? (
            <>
              <FireIconSolid className="sidebar-container h-5 w-5 text-yellow-500  " />
              <p className="text-yellow-500">Firebase Songs</p>
            </>
          ) : (
            <>
              <FireIcon className="sidebar-container h-5  w-5" />
              <p>Firebase Songs</p>
            </>
          )}
=======
          <HeartIcon className="sidebar-container h-5  w-5" />
          <p>Liked Songs</p>
>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8
        </button>
        <hr className="boder-t-[0.1px] border-gray-900 " />
        <br />
      </div>

      <div
        onClick={handleCP}
        className="h-screen space-y-4 overflow-y-scroll scroll-auto scrollbar-hide"
      >
        {playlists.map((playlist) => (
          <p
            key={playlist.id}
            onClick={() => setPlaylistId(playlist.id)}
<<<<<<< HEAD
            className="cursor-pointer items-center truncate p-1 hover:text-white"
=======
            className="cursor-pointer items-center truncate p-1 hover:text-white "
>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8
          >
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  )
}

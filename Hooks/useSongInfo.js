import { useRecoilState } from 'recoil'
import { currentTrackIdState } from '../Atoms/SongAtom'
import useSpotify from './useSpotify'
import { useEffect, useState } from 'react'

export default function useSongInfo() {
  const spotifyApi = useSpotify()
  const [currentIdTrack, setCurrentIdTrack] =
    useRecoilState(currentTrackIdState)
  const [songInfo, setSongInfo] = useState(null)

  useEffect(() => {
    const fetchSongInfo = async () => {
      if (currentIdTrack) {
        const trackInfo = await fetch(
          `https://api.spotify.com/v1/tracks/${currentIdTrack}`,
          {
            headers: {
              Authorization: `Bearer${spotifyApi.getAccessToken()}`,
            },
          }
        ).then((res) => res.json())
        setSongInfo(trackInfo)
      }
    }
    fetchSongInfo()
  }, [currentIdTrack, spotifyApi])
  return songInfo
}

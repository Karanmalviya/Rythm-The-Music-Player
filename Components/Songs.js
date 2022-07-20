import { useRecoilValue } from 'recoil'
import { playlistState } from '../Atoms/PlayListAtom'
import Song from "./Song"
export default function Songs() {
  const playlist = useRecoilValue(playlistState)

  return (
    <div>
      <div>
<<<<<<< HEAD

=======
        
>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8
      </div>
    <div className="text-white px-8 flex flex-col space-y-1 pb-18">
      {playlist?.tracks.items.map((track, i) => (
        <Song key={track.track.id} track={track} order={i} />
      ))}
    </div>
    </div>
  )
}
<<<<<<< HEAD

=======
>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8

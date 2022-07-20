import { HiOutlineClock } from '@heroicons/react/outline'

export default function Heading() {
  return (
    <div className='flex'>
      <div>
        <h2>TITLE</h2>
      </div>
      <div>
        <h2>Album</h2>
      </div>
      <div>
        <HiOutlineClock />
      </div>
    </div>
  )
}

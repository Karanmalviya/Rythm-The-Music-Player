import React from 'react'
import IMAGES from '../public/images/images'
import Image from 'next/image'

function Library() {
  return (
    <div
      className="mt-16 h-screen select-none flex-nowrap overflow-y-scroll px-10 pb-52 scrollbar-hide"
      draggable="false"
    >
      <div className="mt-1 ">
        <h2 className="pb-3 text-2xl font-bold text-white">Browse All</h2>
        <div className="flex flex-wrap justify-around gap-y-10 gap-x-3 text-white ">
          {[
            {
              Name: 'Folk',
              imgs: IMAGES.logofolk,
              description: 'Beautiful instrumental music',
            },
            {
              Name: 'Classical',
              imgs: IMAGES.logoclassical,
              description: 'Beautiful instrumental music',
            },
            {
              Name: 'Rock',
              imgs: IMAGES.logorock,
              description: 'Beautiful instrumental music',
            },
            {
              Name: 'Rythm blues',
              imgs: IMAGES.logotravel,
              description: 'Beautiful instrumental music',
            },
            {
              Name: 'Electronic dance music',
              imgs: IMAGES.logonewrelease,
              description: 'Beautiful instrumental music',
            },
            {
              Name: 'Focus',
              imgs: IMAGES.logofocus,
              description: 'Beautiful instrumental music',
            },
            {
              Name: 'K-Pop',
              imgs: IMAGES.logokpop,
              description: 'Beautiful instrumental music',
            },
            {
              Name: 'Heavy Metal',
              imgs: IMAGES.logoheavymetal,
              description: 'Beautiful instrumental music',
            },
            {
              Name: 'Dance Music',
              imgs: IMAGES.logodance,
              description: 'Beautiful instrumental music',
            },
            {
              Name: 'Rap Songs',
              imgs: IMAGES.logoelectronic,
              description: 'Beautiful instrumental music',
            },
            {
              Name: 'Romance',
              imgs: IMAGES.logoromantic,
              description: 'Romantic music',
            },
            {
              Name: 'Made for You',
              imgs: IMAGES.logomadeforyou,
              description: 'Beautiful instrumental music',
            },
            {
              Name: 'Sleep',
              imgs: IMAGES.logosleep,
              description: 'Beautiful instrumental music',
            },
            {
              Name: 'TV & Movies',
              imgs: IMAGES.logotvmovie,
              description: 'Beautiful instrumental music',
            },
            {
              Name: 'Happy Hoilday',
              imgs: IMAGES.logoholiday,
              description: 'Beautiful instrumental music',
            },
            {
              Name: 'Summer',
              imgs: IMAGES.logosummer,
              description: 'Beautiful instrumental music',
            },
            {
              Name: 'Instrumental',
              imgs: IMAGES.logoinstrumental,
              description: 'Beautiful instrumental music',
            },
            {
              Name: 'Pop Music',
              imgs: IMAGES.logopop,
              description: 'Beautiful instrumental music',
            },
          ].map((item, index) => (
            <div
              key={item.Name + index}
              className="h-56 w-44 justify-center  rounded-md border-0 bg-blue-100 bg-opacity-10 hover:bg-opacity-[.14]"
            >
              <div className="mt-4 flex justify-center overflow-hidden rounded-xl border-0">
                <Image src={item.imgs} height={145} width={145} />
              </div>
              <div className="mt-3 ml-4 mr-4 truncate">
                <h2 className="text-sm">{item.Name}</h2>
                <p className="truncate text-sm text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Library

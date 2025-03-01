import React from 'react'
import IMAGES from '../public/images/images'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SongFire from '../Components/SongFire'

function SongList() {
  return (
    <React.Fragment>
      <div className="mt-10 ml-[3rem] ">
        <h2 className="mb-6 flex flex-wrap text-2xl font-bold text-yellow-500">
          Popular Hits
        </h2>
        <div className="mb-24 flex flex-wrap gap-x-7 gap-y-5">
          {/* {[
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
          ]. */}

          {SongFire &&
            SongFire.map((item, index) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                key={item.id + index}
              >
                <div className="group h-56 w-44 justify-center rounded-md border-0 bg-blue-100 bg-opacity-10 hover:bg-opacity-[.14]">
                  <div className="flex justify-center">
                    <div className="mt-[0.8rem] overflow-hidden rounded-md border-0 ">
                      <Image
                        src={item.imgSrc}
                        height={145}
                        width={145}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mt-3 ml-4 mr-4 truncate">
                    <h2 className="text-sm">{item.songName}</h2>
                    <p className="truncate text-sm text-gray-400">
                      {item.artist}
                    </p>
                  </div>

                  <div className="-mt-[6.3rem] ml-[7.3rem] h-10 w-10">
                    <Image
                      src={IMAGES.logoplaybtn1}
                      alt=""
                      className="invisible group-hover:visible"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </React.Fragment>
  )
}
export default SongList

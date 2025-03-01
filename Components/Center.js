// import { signOut, useSession } from 'next-auth/react'
import IMAGES from '../public/images/images.js'
import Image from 'next/image'
import SongsList from './SongList'
import { motion } from 'framer-motion'

export default function Center() {
  var day = new Date()
  var hours = day.getHours()
  var greet = ''

  ;(() => {
    if (hours >= 5 && hours <= 11) greet = 'Good Morning'
    else if (hours == 12) greet = 'Good Afternoon'
    else if (hours >= 13 && hours <= 17) greet = 'Good Afternoon '
    else if (hours > 18 && hours <= 20) greet = 'Good Evening '
    else if (hours >= 21 && hours >= 11) greet = 'Good Night'
    else greet = 'Wow! You`re still awake. Working Late?'
  })()
  return (
    <div className="flex h-screen select-none flex-wrap overflow-y-scroll text-white scrollbar-hide ">
      <section
        className={`h-80 items-end space-x-7 bg-gradient-to-b from-indigo-900  to-black p-5  text-white`}
      >
        <h2 className="mt-16 mb-4 ml-7 text-3xl font-bold">{greet}</h2>
        <div className="flex flex-wrap gap-x-5 gap-y-4 text-white">
          {[
            {
              name: 'Liked Songs',
              img: IMAGES.logoliked,
            },
            {
              name: 'Rock',
              img: IMAGES.logorock,
            },
            {
              name: 'Classical',
              img: IMAGES.logoclassical,
            },
            {
              name: 'Popular',
              img: IMAGES.logopopular,
            },
            {
              name: 'Dance',
              img: IMAGES.logodance,
            },
            {
              name: 'Folk',
              img: IMAGES.logofolk,
            },
          ].map((item, index) => (
            <div
              key={item.name + index}
              className="group box flex overflow-hidden rounded-lg border-0 bg-white bg-opacity-10  hover:bg-opacity-20 sm:h-[4rem] sm:w-56 md:h-[4rem] md:w-56 lg:h-20 lg:w-96 "
            >
              <div className="mbhw sm:h-[2rem] sm:w-[4rem] md:h-[4rem] md:w-[4rem] lg:h-[6rem] lg:w-[5rem] ">
                <Image src={item.img} alt="" />
              </div>
              <p className="text-thin text-para flex flex-wrap font-semibold sm:mt-5 sm:ml-5 md:ml-4 md:mt-5 lg:mt-7">
                {item.name}
              </p>

              <div className="ply-btn fixed h-10 w-10 sm:my-[.1rem] sm:ml-[10.5rem] md:my-2.4 md:ml-[10.5rem] lg:my-[0.6rem] lg:ml-[20rem]">
                <Image
                  src={IMAGES.logoplaybtn1}
                  alt=""
                  className="ply-hide invisible group-hover:visible"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <SongsList />
    </div>
  )
}

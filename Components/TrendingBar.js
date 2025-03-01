import React from 'react'
import IMAGES from '../public/images/images.js'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import 'swiper/css/effect-cards'
export default function TrendingBar() {
  SwiperCore.use([EffectCoverflow, Pagination, Autoplay])
  return (
    <div
      className="mt-16 h-screen select-none flex-nowrap overflow-y-scroll px-10 pb-52 scrollbar-hide"
      draggable="false"
    >
      <h2 className="pb-3 text-2xl font-bold text-white">Your Top Genre</h2>

      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="text-white"
          modules={[Autoplay]}
          autoplay={{ delay: 2000 }}
          pagination={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          centeredSlides={false}
        >
          {[
            {
              name: 'Pop',
              imgs: IMAGES.logopop,
              color: 'bg-purple-900',
            },
            ,
            {
              name: 'Indie',
              imgs: IMAGES.logoindie,
              color: 'bg-green-700',
            },
            {
              name: 'Hip Hop',
              imgs: IMAGES.logohiphop,
              color: 'bg-orange-700',
            },
            {
              name: 'K-Pop',
              imgs: IMAGES.logokpop,
              color: 'bg-yellow-500',
            },
            {
              name: 'Party',
              imgs: IMAGES.logoparty,
              color: 'bg-blue-500',
            },
            {
              name: 'Rock',
              imgs: IMAGES.logorock,
              color: 'bg-red-600',
            },
          ].map((item, index) => (
            <SwiperSlide key={item.name + index}>
              <div
                className={`mx-auto h-56 w-96 overflow-hidden rounded-2xl border-0 ${item.color} px-5 pt-3`}
              >
                <p className="text-4xl font-semibold">{item.name}</p>
                <div className="mt-12 ml-64 h-32 w-32 rotate-12">
                  <Image src={item.imgs} className="origin-center" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-7 ">
        <h2 className="pb-3 text-2xl font-bold text-white">Browse All</h2>
        <div className="flex flex-wrap justify-around gap-y-10 gap-x-3 text-white ">
          {[
            {
              name: 'DJ Night',
              imgs: IMAGES.logonewrelease,
              color: 'bg-pink-700',
            },
            {
              name: 'Holiday',
              imgs: IMAGES.logoholiday,
              color: 'bg-red-300',
            },
            { name: 'Punjabi', imgs: IMAGES.logopunjabi, color: 'bg-blue-900' },
            {
              name: 'Jazz',
              imgs: IMAGES.logomadeforyou,
              color: 'bg-orange-400',
            },
            {
              name: 'Instrumental',
              imgs: IMAGES.logoinstrumental,
              color: 'bg-red-200',
            },
            {
              name: 'Romance',
              imgs: IMAGES.logoromantic,
              color: 'bg-red-500',
            },
            {
              name: 'Bollywood',
              imgs: IMAGES.logobollywood,
              color: 'bg-blue-700',
            },
            {
              name: 'Podcasts',
              imgs: IMAGES.logopodcast,
              color: 'bg-pink-400',
            },
            { name: 'Summer', imgs: IMAGES.logosummer, color: 'bg-yellow-500' },
            {
              name: 'Party',
              imgs: IMAGES.logoromantic,
              color: 'bg-purple-400',
            },
            { name: 'Workout', imgs: IMAGES.logoworkout, color: 'bg-gray-500' },
            { name: 'Focus', imgs: IMAGES.logofocus, color: 'bg-green-600' },
            {
              name: 'Classical',
              imgs: IMAGES.logoindianclassical,
              color: 'bg-orange-700',
            },
            { name: 'K-Pop', imgs: IMAGES.logokpop, color: 'bg-purple-700 ' },
            {
              name: 'Classical',
              imgs: IMAGES.logoindianclassical,
              color: 'bg-pink-800',
            },
            {
              name: 'Devotional',
              imgs: IMAGES.logodevotional,
              color: 'bg-green-400',
            },
            { name: 'Travel', imgs: IMAGES.logotravel, color: 'bg-yellow-300' },
            {
              name: 'Rock',
              imgs: IMAGES.logotvmovie,
              color: 'bg-gray-800',
            },
          ].map((item, index) => (
            <div
              key={item.name + index}
              className={`h-44 w-44 overflow-hidden rounded-2xl border-0 ${item.color} px-5 pt-3`}
            >
              <p className="text-2xl font-semibold">{item.name}</p>
              <div className="mt-[3rem] ml-20 h-20 w-20 rotate-12">
                <Image src={item.imgs} className="origin-center" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

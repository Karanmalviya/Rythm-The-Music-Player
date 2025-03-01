import React from 'react'
import { Detector } from 'react-detect-offline'
import IMAGES from '../../public/images/images'
import Image from 'next/image'

export default function ConnectionOffline(props) {
  return (
    <>
      <Detector
        render={({ online }) =>
          online ? (
            props.children
          ) : (
            <>
              <div className="flex-nowrap justify-center">
                <p className="flex justify-center text-5xl">404</p>
                <div className=" flex justify-center">
                  <div className="">
                    <Image src={IMAGES.logo404} alt="" />
                  </div>
                </div>

                <div className="flex-nowrap">
                  <p className="flex justify-center text-3xl font-semibold">
                    Look like you're lost
                  </p>
                  <p className="flex justify-center">
                    the page you are looking for have no Signal!
                  </p>
                </div>
              </div>
            </>
          )
        }
      />
    </>
  )
}

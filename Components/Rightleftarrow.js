import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'

export default function rightleftarrow() {
  return (
    <div className="absolute mt-4 lg:left-64 flex gap-y-3 gap-x-2 text-white md:left-52 sm:left:20">
      <div className="rounded-full bg-black opacity-70 hover:opacity-90 ">
        <ChevronLeftIcon className=" h-8 w-8 " />
      </div>
      <div className="rounded-full bg-black opacity-70 hover:opacity-90">
        <ChevronRightIcon className="h-8 w-8 " />
      </div>
    </div>
  )
}

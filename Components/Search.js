import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

<<<<<<< HEAD
import TrendingBar from './TrendingBar'
export default function Search() {
  return (
    <React.Fragment>
      <div className="absolute mt-4 flex px-20 md:ml-[16rem] lg:ml-80">
=======
import TrendingBar from "./TrendingBar"
export default function Search() {
  return (
    <React.Fragment>
      <div className="absolute ml-80 mt-3 flex justify-center px-20">
>>>>>>> 342843398a632b8cb2f0ac9c48a766012fa9c1e8
        <button className=" items-center rounded-l-2xl bg-white px-2 text-xs font-medium text-gray-600 shadow-md transition duration-150  ease-in-out ">
          <SearchIcon className="h-6 w-7 text-gray-700" />
        </button>
        <div className="inline-block xl:w-80">
          <div className="flex outline-none">
            <input
              type="text"
              id="search"
              className=" form-control relative m-0 block w-full min-w-0 flex-auto rounded-r-2xl bg-white bg-clip-padding px-4 py-1.5 text-base font-normal text-gray-800 placeholder-gray-800 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-800 focus:outline-none"
              placeholder="Artist, songs, or podcasts"
            />
          </div>
        </div>
      </div>
      <TrendingBar />
    </React.Fragment>
  )
}

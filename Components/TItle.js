import { ClockIcon } from '@heroicons/react/outline'
import React from 'react'

function TItle() {
  return (
    <div className="grid select-none grid-cols-4 pl-16 text-gray-500">
      <div className="flex items-center">
        <div>#TITLE</div>
      </div>
      <div className="ml-auto flex items-center pl-32 ">
        <p className="hidden pl-36 md:inline">ALBUM</p>
      </div>
      <div className="ml-auto flex items-center pl-80">
        <ClockIcon className="h-5 w-5" />
      </div>
      <div className="ml-auto flex items-center pr-10">
        <p className="hidden md:inline">LIKED</p>
      </div>
    </div>
  )
}

export default TItle

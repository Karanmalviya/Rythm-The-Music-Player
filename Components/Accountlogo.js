import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { signOut, useSession } from 'next-auth/react'

export default function Accountlogo() {
  const { data: session } = useSession()

  function handleClick(e) {
    if (e.target.id === 'hide') {
      document.getElementById('user').style.display = 'none'
      document.getElementById('logout').style.display = 'flex'
    } else {
      e.stopPropagation()
      document.getElementById('logout').style.display = 'none'
      document.getElementById('user').style.display = 'flex'
      console.log('person logget out')
    }
  }
  return (
    <header className="absolute top-4 right-8">
      <div>
        <div className="cursor-pointer flex-col items-center space-x-3 rounded-full border border-gray-700 bg-black p-0 pr-2 text-white opacity-90 hover:opacity-100">
          <div id="user" className="flex items-center space-x-3 text-white">
            <img
              draggable="false"
              className="h-9 w-9 rounded-full opacity-100"
              src={session?.user.image}
            />
            <h2>{session?.user.name}</h2>
            <ChevronLeftIcon
              className="h-5 w-5 rounded-full hover:bg-gray-800"
              onClick={handleClick}
              id="hide"
            />
          </div>

          <div
            id="logout"
            className="hidden flex-wrap items-center space-x-3"
            
          >
            <img
              draggable="false"
              className="h-9 w-9 rounded-full opacity-100"
              src={session?.user.image}
            />
            <h2 onClick={() => signOut()}>Logout</h2>
            <ChevronRightIcon
              className="h-5 w-5 rounded-full hover:bg-gray-800"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

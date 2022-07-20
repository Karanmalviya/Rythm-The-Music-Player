import React from 'react'
import ReactLoading from 'react-loading'

export default function Loading() {
  return (
    <div className="h-screen bg-black">
      <div className="flex justify-center">
        <ReactLoading
          type="bubbles"
          color="#ff3c27"
          height={150}
          width={150}
          className="mt-60"
        />
      </div>
    </div>
  )
}

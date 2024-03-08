import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video text-white bg-gradient-to-r from-black p-2 pl-7 absolute'>
      <h1 className='text-5xl mt-52 font-extrabold mb-2 md:text-xl md:mt-12'>{title}</h1>
      <p className='text-justify w-1/3 overflow-hidden md:text-[10px] md:w-1/2 md:h-11 md:leading-[11px]'>{overview}</p>
      <div className='mt-4'>
        <button className='py-2 px-6 font-bold text-xl bg-white rounded-sm border-2 border-white text-black md:py-0 md:px-2 md:text-sm'>Play</button>
        <button className='py-2 px-3 ml-5 font-bold text-xl text-white border-2 border-gray-500 bg-gray-500 rounded-sm md:py-0 md:px-1 md:text-sm'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
import React, { useState } from 'react'

const Banner = ({banner}) => {
  const [show, setShow] = useState(false)
  return (
    <div className='min-w-60 h-80 relative bg-red-100  md:w-1/2 md:h-72 ' onMouseOver={()=>{setShow(true)}} onMouseOutCapture={()=>{setShow(false)}}>
      <img className='w-full h-full' src={"https://image.tmdb.org/t/p/w1280/"+banner} alt="" />
      {
        show&&(<div
          className='absolute w-full h-full top-0 bg-black opacity-25'
          style={{ left: '0', transition: 'left 1s' }}
        ></div>)
      }
    </div>
  )
}

export default Banner
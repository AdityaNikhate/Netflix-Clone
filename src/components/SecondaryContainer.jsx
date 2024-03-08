import React from 'react'
import Banner from './Banner'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const data = useSelector((state)=>state.movies?.nowPlayingMovie)
  const data2 = useSelector((state)=>state.movies?.popularMovie)
  const data3 = useSelector((state)=>state.movies?.topRatedMovie)


  return (
    <div className='z-40 relative -mt-20 md:mt-0 text-white md:text-gray-700'>
      <h1 className='text-2xl font-bold px-4 mb-2'>Latest Movies</h1>
      <div className=' ml-4 flex gap-4 flex-nowrap overflow-scroll overflow-y-scroll no-scrollbar md:mt-0'>
      {
        data&&(data.map((item)=>(
          <Banner key={item.id} banner={item.poster_path}/>
        )))
      }
    </div>

    <h1 className='text-2xl font-bold px-4 mb-2 text-black mt-3'>Popular Movies</h1>
      <div className=' ml-4 flex gap-4 flex-nowrap overflow-scroll overflow-y-scroll no-scrollbar md:mt-0'>
      {
        data2&&(data2.map((item)=>(
          <Banner key={item.id} banner={item.poster_path}/>
        )))
      }
    </div>

    <h1 className='text-2xl font-bold px-4 mb-2 text-black mt-3'>Top Rated Movies</h1>
      <div className=' ml-4 flex gap-4 flex-nowrap overflow-scroll overflow-y-scroll no-scrollbar md:mt-0'>
      {
        data3&&(data3.map((item)=>(
          <Banner key={item.id} banner={item.poster_path}/>
        )))
      }
    </div>
    </div>
  )
}

export default SecondaryContainer
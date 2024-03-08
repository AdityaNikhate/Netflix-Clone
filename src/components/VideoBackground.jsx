import React, { useEffect, useState } from 'react'
import {API_LATEST_MOVIES} from '../constants/variable'

const VideoBackground = ({movieId}) => {
  const [video, setVideo] = useState(null)
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`


  const getMovieVideo = async ()=>{
    const res = await fetch(url, API_LATEST_MOVIES)
    const data = await res.json()   
    const trailer = data.results.filter((video)=>(video.type=="Trailer"))
    setVideo(trailer[0].key)
  }

  useEffect(()=>{
    getMovieVideo()
  },[movieId])
  return (
    <div className='-z-10'>
    <iframe
    className='w-screen aspect-video'
    src={"https://www.youtube.com/embed/"+video+"?&autoplay=1&mute=1"} 
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
    </div>
  )
}   

export default VideoBackground
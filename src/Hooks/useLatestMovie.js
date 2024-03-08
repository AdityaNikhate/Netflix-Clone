import {API_LATEST_MOVIES} from '../constants/variable'
import { useDispatch } from 'react-redux';
import {addNowPlayingMovies,addPopularMovies, addTopRatedMovies} from '../utils/nowPlayingMovieSlice'
import { useEffect } from 'react';

const useLatestMovie = ()=>{
  const dispatch = useDispatch()

  const getNowPlayingMovies = async ()=>{
    const res =await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_LATEST_MOVIES)
    const data = await res.json()
    dispatch(addNowPlayingMovies(data.results))
  }

  const getPopularMocies = async ()=>{
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', API_LATEST_MOVIES)
    const data = await res.json()
    dispatch(addPopularMovies(data.results))
  }

  const getTopRatedMovies = async ()=>{
    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_LATEST_MOVIES)
    const data = await res.json()
    dispatch(addTopRatedMovies(data.results))
  }
  useEffect(()=>{
    getNowPlayingMovies()
    getPopularMocies()
    getTopRatedMovies()
  },[])
}

export default useLatestMovie
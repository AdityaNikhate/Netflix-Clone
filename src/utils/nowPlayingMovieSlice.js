import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMovieSlice = createSlice({
  name: 'movies',
  initialState:{
    nowPlayingMovie : null,
    popularMovie : null,
    topRatedMovie : null
  },
  reducers:{
    addNowPlayingMovies: (state, action)=>{
      state.nowPlayingMovie = action.payload
    },
    addPopularMovies : (state,action)=>{
      state.popularMovie = action.payload
    },
    addTopRatedMovies : (state, action)=>{
      state.topRatedMovie = action.payload
    }
  }
})

export const {addNowPlayingMovies,addPopularMovies, addTopRatedMovies} = nowPlayingMovieSlice.actions

export default nowPlayingMovieSlice.reducer
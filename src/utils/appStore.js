import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieReducer from './nowPlayingMovieSlice'
const appStore = configureStore({
  reducer:{
    user: userSlice,
    movies: movieReducer
  }
})

export default appStore
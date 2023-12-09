import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPopularMovies from '../hooks/useNowPopularMovies'

const Browse = () => {

  useNowPlayingMovies();
  useNowPopularMovies();

  return (
    <>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </>
  )
}

export default Browse
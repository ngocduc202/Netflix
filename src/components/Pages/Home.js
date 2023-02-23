import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Contents from '../contents/Contents'
import Intro from '../Intro/Intro'
import Menus from '../Menu/Menus'
import MovieDetail from '../MovieDetail/MovieDetail'

const Home = () => {

  const {MoviesDetail} = useSelector(state => state.infoMovies)
  const [isShowMovieDetail, setIsShowMovieDetail] = useState(false)

  useEffect(() => {
    setIsShowMovieDetail(MoviesDetail ? true : false)
  }, [MoviesDetail])


  return (
    <div>
      <Intro />
      <Contents />
      <Menus />
      <MovieDetail movie={MoviesDetail} showModal={isShowMovieDetail} />
    </div>
  )
}

export default Home
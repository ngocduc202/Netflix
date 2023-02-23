import React from 'react'
import { useSelector } from 'react-redux'
import MovieDetail from '../MovieDetail/MovieDetail'
import SearchMovies from '../SearchMovies/SearchMovies'

const Search = () => {

  const {MoviesDetail} = useSelector(state => state.infoMovies)
  return (
    <div>
        <SearchMovies />
        <MovieDetail showModal={MoviesDetail ? true : false} movie={MoviesDetail} />
    </div>
  )
}

export default Search
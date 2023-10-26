import React from 'react'
import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const {genres} = useGenres();
  return (
    <ul>
       {genre} 
    </ul>
  )
}

export default GenreList
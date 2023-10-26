import React from 'react'
import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const {genres} = usData();
  return (
    <ul>
       {genres.map(genre => <li key={genre.id}>{genre.name}</li>)} 
    </ul>
  )
}

export default GenreList
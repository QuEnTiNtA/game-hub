import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres';

const GenreList = () => {
  const {genres} = usData<Genre>();
  return (
    <ul>
       {genres.map(genre => <li key={genre.id}>{genre.name}</li>)} 
    </ul>
  )
}

export default GenreList
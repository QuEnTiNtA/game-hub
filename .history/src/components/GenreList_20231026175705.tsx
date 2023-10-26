import React from 'react'
import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const {genres} = useGenres();
  return (
    <ul>
       {genres.map(genre => <li key={}></li>)} 
    </ul>
  )
}

export default GenreList
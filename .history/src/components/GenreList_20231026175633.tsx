import React from 'react'
import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const {genres} = useGenres();
  return (
    <ul></ul>
  )
}

export default GenreList
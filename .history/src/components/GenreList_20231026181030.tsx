import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres';
import useData from '../hooks/useData';

const GenreList = () => {
  const {data} = useGenres();
  return (
    <ul>
       {data.map(genre => <li key={genre.id}>{genre.name}</li>)} 
    </ul>
  )
}

export default GenreList

function usData<T>(): { genres: any; } {
    throw new Error('Function not implemented.');
}

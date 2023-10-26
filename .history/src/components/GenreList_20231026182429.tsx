import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const {data} = useGenres();
  return (
    <List>
       {data.map(genre => <li key={genre.id}>{genre.name}</li>)} 
    </List>
  )
}

export default GenreList

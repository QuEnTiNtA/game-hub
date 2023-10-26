import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const {data} = useGenres();
  return (
    <List>
       {data.map(genre => <ListItem key={genre.id}>{genre.name}</ListItem>)} 
    </List>
  )
}

export default GenreList

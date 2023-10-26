import { List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image boxSize='' />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

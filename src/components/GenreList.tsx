import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
  Heading,
  Box,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Box  paddingX={4}>
          <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
          <List>
            {data?.results.map((genre) => (
              <ListItem key={genre.id} paddingY="5px">
                <HStack>
                  <Image
                    boxSize="32px"
                    borderRadius={8}
                    objectFit="cover"
                    src={getCroppedImageUrl(genre.image_background)}
                  />
                  <Button
                    whiteSpace="normal"
                    textAlign="left"
                    fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                    onClick={() => onSelectGenre(genre)}
                    fontSize="lg"
                    variant="link"
                  >
                    {genre.name}
                  </Button>
                </HStack>
              </ListItem>
            ))}
          </List>
      </Box>
    </>
  );
};

export default GenreList;

import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const {data: platforms} = usePlatforms();
  const platform = platforms?.results.find

  const heading = `${gameQuery.platformId?.name || ""} ${
    genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginBottom={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;

import {Text} from '@chakra-ui/react'
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const {games, error} = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={3} spacing={10}>
        {games.map((game) => (
          <GameCard /li>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

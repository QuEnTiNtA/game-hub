import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    //the parent-platform is not a platform array (Platform[]), it is an array of object, where each object has a property called platform of type Platform.
    metacritic: number;
    rating_top: number;
}

const useGames = (gameQuery: GameQuery) => 
  useQeury({
    queryKey: ['games', gameQuery],
    queryFn: () =>
  })
  useData<Game>('/games', {params: {genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.sortOrder, search: gameQuery.searchText}}, [gameQuery]);

export default useGames;
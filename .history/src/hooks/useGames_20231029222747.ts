import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import  from "../services/api-client";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>('/games');

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
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>('/games', {
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText
            },
        })
        .then(res => res.data)
  })

export default useGames;
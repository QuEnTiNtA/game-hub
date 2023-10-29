import useData from "./useData";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms;

import { useQuery } from "@tanstack/react-query";
import plat from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => 
      apiClient.get<FetchResponse<Platform>>('/platforms/list/parents').then(res => res.data),
      staleTime: 24 * 60 * 60 * 1000,
      initialData: { count: platforms.length, results: platforms},
})
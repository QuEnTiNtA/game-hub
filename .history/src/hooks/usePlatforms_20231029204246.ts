import useData from "./useData";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useData<Platform>('/platforms/lists/parents');



import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";


const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => 
      apiClient.get<FetchResponse<Platform>>('/platforms/list/parents').then(res => res.data),
      staleTime: 24 * 60 * 60 * 1000,
      initialData: { count: platforms.length, results: platforms},
})
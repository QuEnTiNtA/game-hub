import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ({data: genres, isLoading: false, error: null});
// const useGenres = () => useData<Genre>('/genres')
useQuery()

export default useGenres;
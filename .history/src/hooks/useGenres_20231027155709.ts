import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ({data: null, isLoading: false, error: null});
// const useGenres = () => useData<Genre>('/genres')

export default useGenres;
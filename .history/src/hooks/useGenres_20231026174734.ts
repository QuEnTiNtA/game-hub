import { useState } from "react";

interface Genre {
    
}

const useGenres = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<FetchGamesResponse>("/games", {signal: controller.signal})
        .then((res) => {
            setGames(res.data.results);
            setLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        });

      return () => controller.abort();
    }, []);

    return {games, error, isLoading};
};

export default useGenres;
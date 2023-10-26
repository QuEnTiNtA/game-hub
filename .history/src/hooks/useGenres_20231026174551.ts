const useGenres = () => {
    const [games, setGames] = useState<
    const [error, setError] = useState(
    const [isLoading, setLoading] = use
    useEffect(() => {
      const controller = new AbortContr
      setLoading(true);
      apiClient
        .get<FetchGamesResponse>("/game
        .then((res) => {
            setGames(res.data.results);
            setLoading(false);
        })
        .catch((err) => {
            if (err instanceof Canceled
            setError(err.message);
            setLoading(false);
        });
      return () => controller.abort();
    }, []);
    return {games, error, isLoading};
};

export default useGenres;
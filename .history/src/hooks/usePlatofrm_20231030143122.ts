import usePlatforms from './usePlatforms';

const usePlatofrm = (id: number) => {
    const {data: platforms} = usePlatforms();
    return platform = platforms?.results.find((g) => g.id === id)
}

export default usePlatofrm
import React from 'react'

const usePlatofrm = (id: number) => {
    const {data: platforms} = usePlatforms();
    const platform = platforms?.results.find((g) => g.id === gameQuery.platformId)
}

export default usePlatofrm
import React from 'react'
import usePlatforms from './usePlatforms';

const usePlatofrm = (id: number) => {
    const {data: platforms} = usePlatforms();
    const platform = platforms?.results.find((g) => g.id === id)
}

export default usePlatofrm
import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface FetchGamesResponse {
    count: number;
    p
}

const GameGrid = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient.get('/games').then(res => setGames())
  })

  return (
    <div>GameGrid</div>
  )
}

export default GameGrid
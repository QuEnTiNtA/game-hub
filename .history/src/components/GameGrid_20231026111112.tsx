import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient.get<FetchGamesResponse>('/games').then(res => setGames(res.data))
  })

  return (
    <div>GameGrid</div>
  )
}

export default GameGrid
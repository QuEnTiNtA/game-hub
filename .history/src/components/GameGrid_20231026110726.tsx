import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

const GameGrid = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient.get('/games')
  })

  return (
    <div>GameGrid</div>
  )
}

export default GameGrid
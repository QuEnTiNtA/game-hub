import React from 'react'
import { Game } from '../hooks/useGames'

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card>
        <Image></Image>
    </Card>
  )
}

export default GameCard
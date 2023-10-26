import React from 'react'
import { Game } from '../hooks/useGames'
import { Card } from '@chakra-ui/react'

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card>
        <Image src></Image>
    </Card>
  )
}

export default GameCard
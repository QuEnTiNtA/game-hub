import { Heading } from '@chakra-ui/react'
import React from 'react'
import { GameQuery } from '../App'

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}: Props) => {
  // Games
  // Action Games
  // Xbox Games
  // Xbox Action Games
  const headning = '${gameQuery.platform?.name} ${gameQuery.genre?.name} Games';

  return (
    <Heading as='h1'>{heading}</Heading>
  )
}

export default GameHeading
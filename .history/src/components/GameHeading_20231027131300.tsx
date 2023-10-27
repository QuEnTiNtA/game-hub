import { Heading } from '@chakra-ui/react'
import React from 'react'
import { GameQuery } from '../App'

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({}) => {
  return (
    <Heading as='h1'></Heading>
  )
}

export default GameHeading
import { Badge } from '@chakra-ui/react';

interface Props {
    score: number;
}

const CriticScore = ({score}: Props) => {
  return (
    <Badge fontSize={}>{score}</Badge>
  )
}

export default CriticScore
import {FaWindows, FaPlaystation, Fa} from 'react-icons/fa';
import { Platform } from '../hooks/useGames'
import { Text } from '@chakra-ui/react'

interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({platforms}: Props) => {
  return (
    <>
    {platforms.map(platform => <Text>{platform.name}</Text>)}
    {/* platforms is an array of Platform(Platform[]) */}
    </>
  )
}

export default PlatformIconList
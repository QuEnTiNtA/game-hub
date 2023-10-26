import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux,FaAndroid} from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
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
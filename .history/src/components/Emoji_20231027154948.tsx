import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import { ImageProps, Image } from '@chakra-ui/react';

interface Props {
    rating: number;
}

const Emoji = ({rating}: Props) => {
  if (rating < 3) return null;

  const emojiMap: {[key: number]: ImageProps} ={ // in this object, we have any number of keys of type number.
    3: {src: meh, alt: 'meh', boxSize},
    4: {src: thumbsUp, alt: 'recommended'},
    5: {src: bullsEye, alt: 'exceptional'},
  }

  return (
    <Image {...emojiMap[rating]} boxSize='25px' />
  )
}

export default Emoji
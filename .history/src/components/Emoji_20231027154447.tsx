import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';

interface Props {
    rating: number;
}

const Emoji = ({rating}: Props) => {
  if (rating < 3) return null;

  const emojiMap: {[key: number]} ={ // in this object, we have any numbers of keys of type number.
    3: {src: meh, alt: 'meh'},
    4: {src: thumbsUp, alt: 'recommended'},
    5: {src: bullsEye, alt: 'exceptional'},
  }

  return (
    <Image {...emojiMap[rating]} />
  )
}

export default Emoji
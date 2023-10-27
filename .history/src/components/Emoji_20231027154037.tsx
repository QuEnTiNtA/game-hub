import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';

interface Props {
    rating: number;
}

const Emoji = ({rating}: Props) => {
  if (rating < 3) return null;

  const emojiMap ={
    3: {src: meh, alt: 'meh'},
    4: {src: meh, alt: 'meh'},
    5: {src: bullsEye, alt: 'meh'},
  }

  return (
    <div>Emoji</div>
  )
}

export default Emoji
import React from 'react'

interface Props {
    rating: number;
}

const Emoji = ({rating}: Props) => {
  if (rating < 3)

  return (
    <div>Emoji</div>
  )
}

export default Emoji
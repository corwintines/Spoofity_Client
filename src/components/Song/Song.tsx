// Libraries
import React from 'react'

// Interface
interface Props {
  song: {
    name: String
  }
}

const Song: React.FC<Props> = (props) => {
  return (
    <p>{props.song.name}</p>
  )
}

export default Song
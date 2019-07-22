// Libraries
import React from 'react'

// Component Interface
type Props = {
  playlistID: string
}

const SongSelection: React.FC<Props> = (props) => {
  return (
    <div>
      <p>Songs</p>
      <p>{props.playlistID}</p>
    </div>
  )
}

export default SongSelection
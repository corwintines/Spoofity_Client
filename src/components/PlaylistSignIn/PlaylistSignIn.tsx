// Libraries
import React, { useState } from 'react'

// Components
import Button from '../Button/Button'

// Component Interface
type Props = {
  setPlaylistID: Function,
}

const PlaylistSignIn: React.FC<Props> = (props) => {
  const [currentPlaylist, setPlaylist] = useState('')

  return (
    <div>
      <input
        value={currentPlaylist}
        onChange={(e) => setPlaylist(e.target.value)}
      />
      <Button
        label={'Submit'}
        click={() => {props.setPlaylistID(currentPlaylist)}}
      />
    </div>
  )
}

export default PlaylistSignIn
// Libraries
import React, { useState } from 'react'

// Components
import Button from '../Button/Button'

// Styles
import './PlaylistSignIn.css'

// Component Interface
type Props = {
  setPlaylistID: Function
}

const PlaylistSignIn: React.FC<Props> = (props) => {
  const [currentPlaylist, setPlaylist] = useState('')

  return (
    <form
      className="PlaylistSignIn"
      // TODO: Implement server connection for playlist verification
      onSubmit={() => props.setPlaylistID(currentPlaylist)}
    >
      <input
        minLength={4}
        maxLength={4}
        placeholder={'Playlist Code'}
        value={currentPlaylist}
        onChange={(e) => setPlaylist(e.target.value)}
      />
      <Button
        label={'Submit'}
      />
    </form>
  )
}

export default PlaylistSignIn
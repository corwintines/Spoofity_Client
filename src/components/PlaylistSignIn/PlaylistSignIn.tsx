// Libraries
import React, { useState } from 'react'

// Components
import Button from '../Button/Button'

// Styles
import './PlaylistSignIn.css'

// Component Interface
type Props = {
  setPlaylistID: Function,
}

const PlaylistSignIn: React.FC<Props> = (props) => {
  const [currentPlaylist, setPlaylist] = useState('')

  return (
    <div className="PlaylistSignIn">
      <input
        placeholder={'Playlist Code'}
        value={currentPlaylist}
        onChange={(e) => setPlaylist(e.target.value)}
      />
      <Button
        label={'Submit'}
        // TODO: Implement server connection for playlist verification
        click={() => {props.setPlaylistID(currentPlaylist)}}
      />
    </div>
  )
}

export default PlaylistSignIn
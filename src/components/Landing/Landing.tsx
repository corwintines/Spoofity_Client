// Libraries
import React from 'react'

// Components
import Button from '../Button/Button'
import PlaylistSignIn from '../PlaylistSignIn/PlaylistSignIn'

// Component Interface
type Props = {
  setPlaylistID: Function,
}

const Landing: React.FC<Props> = (props) => {
  return (
    <div className="Landing">
      <PlaylistSignIn setPlaylistID={props.setPlaylistID}/>
      <Button
        label={'Host'}
        click={() => {console.log('Temp')}}
      />
    </div>
  )
}

export default Landing
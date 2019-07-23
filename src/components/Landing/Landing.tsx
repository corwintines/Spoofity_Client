// Libraries
import React from 'react'

// Components
import Button from '../Button/Button'
import PlaylistSignIn from '../PlaylistSignIn/PlaylistSignIn'

// Styles
import './Landing.css'

// Component Interface
type Props = {
  setPlaylistID: Function,
}

const Landing: React.FC<Props> = (props) => {
  return (
    <div className='Landing'>
      <div className='landingContainer verticalBorder'>
        <PlaylistSignIn setPlaylistID={props.setPlaylistID}/>
      </div>
      <div className='landingContainer'>
        <Button
          label={'Host'}
          // TODO: Implement login screen for host, and navigation to it through this method
          click={() => {console.log('Temp')}}
        />
      </div>
    </div>
  )
}

export default Landing
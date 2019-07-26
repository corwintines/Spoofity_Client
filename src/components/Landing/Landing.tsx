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
        <div className='bottom'>
          <h1>Contribute to Playlist</h1>
          <p style={{color: 'white', margin: 20}}>Enter a playlist code and contribute</p>
          <PlaylistSignIn setPlaylistID={props.setPlaylistID}/>
        </div>
      </div>
      <div className='landingContainer'>
        <div>
          <h1>Host a Playlist</h1>
          <p style={{color: 'white', margin: 20}}>Login through Spotify, and host a playlist on your account</p>
          <Button
            label={'Host'}
            // TODO: Implement login screen for host, and navigation to it through this method
            click={() => {
              window.location.replace(`${process.env.REACT_APP_URL}/spotify/authorize`)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Landing
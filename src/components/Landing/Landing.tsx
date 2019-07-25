// Libraries
import React from 'react'
import { withRouter } from 'react-router-dom'

// Components
import Button from '../Button/Button'
import PlaylistSignIn from '../PlaylistSignIn/PlaylistSignIn'

// Styles
import './Landing.css'

const Landing = withRouter((props) => {
  return (
    <div className='Landing'>
      <div className='landingContainer verticalBorder'>
        <div className='bottom'>
          <h1>Contribute to Playlist</h1>
          <p style={{color: 'white', margin: 20}}>Enter a playlist code and contribute</p>
          <PlaylistSignIn setPlaylistID={(playlistCode: string) => props.history.push(playlistCode)}/>
        </div>
      </div>
      <div className='landingContainer'>
        <div>
          <h1>Host a Playlist</h1>
          <p style={{color: 'white', margin: 20}}>Login through Spotify, and host a playlist on your account</p>
          <Button
            label={'Host'}
            // TODO: Implement login screen for host, and navigation to it through this method
            onClick={() => {console.log('Temp')}}
          />
        </div>
      </div>
    </div>
  )
});

export default Landing
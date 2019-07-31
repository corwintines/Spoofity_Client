// Libraries
import React from 'react'

// Components
import Contribute from '../Contribute/Contribute'
import Host from '../Host/Host'

// Styles
import './Landing.css'

const Landing: React.FC = () => {
  return (
    <div className='Landing'>
      <div className='Landing__container'>
        <h1 className='Landing__header'>Contribute to a Playlist</h1>

        <p className='Landing__blurb'>Enter a playlist code and contribute</p>

        <Contribute />
      </div>

      <div className='Landing__seperator'></div>

      <div className='Landing__container'>
        <h1 className='Landing__header'>Host a Playlist</h1>

        <p className='Landing__blurb'>Login through Spotify, and host a playlist on your account</p>

        <Host />
      </div>
    </div>
  )
};

export default Landing
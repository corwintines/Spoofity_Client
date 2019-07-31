// Libraries
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

// Styles
import './Host.css'

const Host: React.FC = () => {
  const spotifyAuthorize = () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/spotify/authorize`;
    window.location.assign(url);
  };

  return (
    <div className='Host'>
      <button
        className='Host__submit'
        onClick={spotifyAuthorize}>
          <span className='Host__label'>Host</span>
          <FontAwesomeIcon className='Host__icon' icon={faStar} />
      </button>
      
    </div>
  )
}

export default Host;
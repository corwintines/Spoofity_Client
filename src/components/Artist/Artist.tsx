// Libraries
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

// Styles
import './Artist.css'

// Type
import { SpotifyArtistType } from '../../types/SpotifyArtistType'

// Interface
interface Props {
  artist: SpotifyArtistType
}

const Artist: React.FC<Props> = (props) => {
  return (
    <div className='Artist'>
      <div className='Artist__image'>
          <img
              src={props.artist.images[2] ? props.artist.images[2].url : ''}
              alt={'artist'}
              height='50px'
              width='50px'
            />
        </div>
        <div>
          <p className='Artist__title'>{props.artist.name}</p>
        </div>
        <button
        className='Artist__button'
        onClick={() => {
          console.log('artist')
        }}
      >
        <FontAwesomeIcon
          className='Artist__icon'
          icon={faAngleRight}
          size='3x'
        />
      </button>
    </div>
  )
}

export default Artist
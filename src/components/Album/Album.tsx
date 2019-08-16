// Libraries
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

// Styles
import './Album.css'

// Type
import { SpotifyAlbumType } from '../../types/SpotifyAlbumType'

// Interface
interface Props {
  album: SpotifyAlbumType
}

const Album: React.FC<Props> = (props) => {
  return (
    <div className='Album'>
      <div className='Album__image'>
        <img
            src={props.album.images[2].url}
            alt={'album'}
            height='50px'
            width='50px'
          />
      </div>
      <div>
        <p className='Song__title'>{props.album.name}</p>
        <p className='Song__artist'>{props.album.artists.map((artist) => {
          return `${artist.name} `
        })}</p>
      </div>
      <button
        className='Song__button'
        onClick={() => {
          console.log('album')
        }}
      >
        <FontAwesomeIcon
          className='Song__icon'
          icon={faAngleRight}
          size='2x'
        />
      </button>
    </div>
  )
}

export default Album
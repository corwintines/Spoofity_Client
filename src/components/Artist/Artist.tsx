// Libraries
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

// Actions
import { setArtists } from '../../data/artists/artistsActions'
import { setAlbums } from '../../data/albums/albumsActions'
import { setTracks } from '../../data/tracks/tracksActions'

// Styles
import './Artist.css'

// Type
import { SpotifyArtistType } from '../../types/SpotifyArtistType'

// Utils
import { getArtistQuery } from '../../utils/getArtistQuery'

// Interface
interface Props {
  artist: SpotifyArtistType
}

const Artist: React.FC<Props> = (props) => {
  const dispatch = useDispatch()
  const { roomCode } = useSelector((state: any) => ({
    roomCode: state.RoomCodeData.roomCode,
  }))

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
        onClick={async () => {
          const abortController = new AbortController()
          const signal = abortController.signal
          await getArtistQuery(roomCode, props.artist.id, { signal: signal }).then((results) => {
            dispatch(setAlbums(results.albums))
            dispatch(setArtists([]))
            dispatch(setTracks(results.tracks))
          }).catch(function(err) {
            console.error(` Err: ${err}`)
          })
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
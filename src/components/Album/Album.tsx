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
import './Album.css'

// Type
import { SpotifyAlbumType } from '../../types/SpotifyAlbumType'

// Utils
import { getAlbumTracks } from '../../utils/getAlbumTracks'

// Interface
interface Props {
  album: SpotifyAlbumType
}

const Album: React.FC<Props> = (props) => {
  const dispatch = useDispatch()
  const { roomCode } = useSelector((state: any) => ({
    roomCode: state.RoomCodeData.roomCode,
  }));

  return (
    <div className='Album'>
      <div className='Album__image'>
        <img
            src={props.album.images[2] ? props.album.images[2].url : ''}
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
        onClick={async () => {
          const abortController = new AbortController()
          const signal = abortController.signal
          await getAlbumTracks(roomCode, props.album.id, { signal: signal }).then((results) => {
            const tracks = results.tracks.items.map((song: any) => {
              return {
                ...song,
                album: props.album,
              }
            })
            dispatch(setAlbums([]))
            dispatch(setArtists([]))
            dispatch(setTracks(tracks))
          }).catch(function(err) {
            console.error(` Err: ${err}`)
          })
        }}
      >
        <FontAwesomeIcon
          className='Song__icon'
          icon={faAngleRight}
          size='3x'
        />
      </button>
    </div>
  )
}

export default Album
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
import './ExpandSearchItem.css'

// Utils
import { submitSearch } from '../../utils/submitSearch'

// Interface
interface Props {
  label: string,
  searchType: string,
}

const ExpandSearchItem: React.FC<Props> = (props) => {
  const dispatch = useDispatch()
  const { roomCode, searchTerm } = useSelector((state: any) => ({
    roomCode: state.RoomCodeData.roomCode,
    searchTerm: state.SearchData.search,
  }));

  return (
    <div className='ExpandSearchItem'>
      <p>{`See all ${props.label}`}</p>
      <button
        className='ExpandSearchItem__button'
        onClick={() => {
          const abortController = new AbortController()
          const signal = abortController.signal
          submitSearch(roomCode, searchTerm, props.searchType, 50, { signal: signal }).then((results) => {
            const albums = results.albums ? results.albums.items : []
            const artists = results.artists ? results.artists.items: []
            const tracks = results.tracks ? results.tracks.items : []
            dispatch(setAlbums(albums))
            dispatch(setArtists(artists))
            dispatch(setTracks(tracks))
          }).catch(function(err) {
            console.error(` Err: ${err}`)
          })
        }}
      >
        <FontAwesomeIcon
          className='ExpandSearchItem__icon'
          icon={faAngleRight}
          size='3x'
        />
      </button>
    </div>
  )
}

export default ExpandSearchItem
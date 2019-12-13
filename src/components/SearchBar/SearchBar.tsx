// Libraries
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { setArtists } from '../../data/artists/artistsActions'
import { setAlbums } from '../../data/albums/albumsActions'
import { setSearch } from '../../data/search/searchActions'
import { setTracks } from '../../data/tracks/tracksActions'

// Utils
import { submitSearch } from '../../utils/submitSearch'

// Styles
import './SearchBar.css';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch()
  const { roomCode, searchTerm } = useSelector((state: any) => ({
      roomCode: state.RoomCodeData.roomCode,
      searchTerm: state.SearchData.search,
  }));

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    if (searchTerm !== '') {
      submitSearch(roomCode, searchTerm, 'album,artist,track', 4, { signal: signal }).then((result) => {
        if (result.albums) {
          dispatch(setAlbums(result.albums.items.splice(0,2)))
        }
        if (result.artists) {
          dispatch(setArtists(result.artists.items.splice(0,1)))
        }
        if (result.tracks) {
          dispatch(setTracks(result.tracks.items))
        }
      }).catch(function(err) {
        console.warn(`submitSearch undefined results: ${err}`)
      })
    }

    return function cleanup () {
      abortController.abort()
    }
  }, [dispatch, roomCode, searchTerm])

  return (
    <div className='SearchBar'>
      <input
        className='SearchBar__input'
        size={30}
        onChange={(e) => {dispatch(setSearch(e.target.value))}}
      />
    </div>
  )
}

export default SearchBar
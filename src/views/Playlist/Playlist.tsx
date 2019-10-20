// Libraries
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// Components
import PlaylistSongs from '../../components/PlaylistSongs/PlaylistSongs'
import RecommendationSongs from '../../components/RecommendationSongs/RecommendationSongs'

// Utils
import { getPlaylistCodeFromUrl } from '../../utils/getPlaylistCodeFromUrl'
import { getPlaylistSongs } from '../../utils/getPlaylistSongs'
import { getRecommendedSongs } from '../../utils/getRecommendedSongs'

// Actions
import { setArtists } from '../../data/artists/artistsActions'
import { setAlbums } from '../../data/albums/albumsActions'
import { setSearch } from '../../data/search/searchActions'
import { setTracks } from '../../data/tracks/tracksActions'
import { setRoomCode } from '../../data/roomCode/roomCodeActions'

// Styles
import './Playlist.css';

const Playlist = withRouter((props) => {  
  const dispatch = useDispatch()
  const [roomCode] = useState(getPlaylistCodeFromUrl(props.location.pathname))
  const [playlistSongs, setPlaylistSongs] = useState([])
  const [recommendationSongs, setRecommendationSongs] = useState([])

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    dispatch(setRoomCode(roomCode))
    getRecommendedSongs(roomCode).then((recommendations) => setRecommendationSongs(recommendations))
    getPlaylistSongs(roomCode, 0, [], setPlaylistSongs, {signal:signal})
    .catch((err) => console.log(err)); // Can handle later

    return function cleanup () {
      abortController.abort()
    }
    /*  eslint-disable-next-line */
  }, [roomCode])
  
  if (!/^[\d\w]{4}$/.test(roomCode)) {
    props.history.replace('');
    dispatch(setRoomCode(''))
    return <p/>;
  }

  return (
    <div className='Playlist'>
      <div className='Playlist__header'>
        <h2 style={{width: '312px'}}>Playlist: {roomCode}</h2>
        <button
          className='Playlist__button'
          onClick={() => {
            dispatch(setSearch(''))
            dispatch(setTracks([]))
            dispatch(setAlbums([]))
            dispatch(setArtists([]))
            props.history.push('/search')
          }}
        >
          <FontAwesomeIcon
            className='Playlist__icon'
            icon={faSearch}
            size='2x'
          />
        </button>
      </div>
      <div className='Playlist__children'>
        <PlaylistSongs songs={playlistSongs} />
      </div>
      <div className='Playlist__children'>
        <RecommendationSongs songs={recommendationSongs} roomCode={roomCode} />
      </div>
    </div>
  )
});

export default Playlist

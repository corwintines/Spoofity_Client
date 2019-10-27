// Libraries
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// Components
import PlaylistSongs from '../../components/PlaylistSongs/PlaylistSongs'
import RecommendationSongs from '../../components/RecommendationSongs/RecommendationSongs'
import Tabs from '../../components/Tabs/Tabs'

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
      <Tabs
        titles={['Playlist', 'Recommendation']}
      >
        <div className='Playlist__children'>
          <h2>Playlist Songs:</h2>
          <div className='Playlist__children_songs Playlist__children_songs_fullheight'>
            <PlaylistSongs songs={playlistSongs} />
          </div>
        </div>
        <div className='Playlist__children'>
          <>
            <h2>Recommendations:</h2>
            <div className='Playlist__children_songs Playlist__children_songs_halfheight'>
              <RecommendationSongs songs={recommendationSongs} roomCode={roomCode} />
            </div>
          </>
          <>
            <h2>Vote:</h2>
            <p>Coming Soon.</p>
          </>
        </div>
      </Tabs>
    </div>
  )
});

export default Playlist

// Libraries
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// Components
import Search from '../Search/Search'
import PlaylistSongs from '../../components/PlaylistSongs/PlaylistSongs'
// import Vote from '../../components/Vote/Vote'

// Utils
import { setRoomCode } from '../../data/roomCode/roomCodeActions'

// Styles
import './Playlist.css';
import { SpotifyPlaylistTrackType } from '../../types/SpotifyPlaylistTrackType';

const getPlaylistCodeFromUrl = (pathname: string) => {
  const parts = pathname.split('/').filter(Boolean)
  const roomCode = parts[parts.length - 1].toLocaleUpperCase()
  return roomCode
}

const getPlaylistSongs = async (roomCode: string, offset: number, playlistSongs: Array<SpotifyPlaylistTrackType>, setPlaylistSongs: Function) => {
  const url = new URL('/playlist/tracks', process.env.REACT_APP_SERVER_URL)
  url.searchParams.append('room', roomCode)
  url.searchParams.append('offset', String(offset))

  try {
    const result = await fetch(url.href, {
      method: 'get'
    })
    const json = await result.json()
    const playlist = [...playlistSongs, ...json.items]
    setPlaylistSongs(playlist)
    if (json.next) {
      await getPlaylistSongs(roomCode, offset+100, playlist, setPlaylistSongs)
    }
  } catch (err) {

  }
}

const Playlist = withRouter((props) => {  
  const dispatch = useDispatch()
  const [roomCode] = useState(getPlaylistCodeFromUrl(props.location.pathname))
  const [playlistSongs, setPlaylistSongs] = useState([])

  useEffect(() => {
    dispatch(setRoomCode(roomCode))
    getPlaylistSongs(roomCode, 0, [], setPlaylistSongs)
    .catch((err) => console.log(err)); // Can handle later
    /*  eslint-disable-next-line */
  }, [roomCode])
  
  if (!/^[\d\w]{4}$/.test(roomCode)) {
    props.history.replace('');
    dispatch(setRoomCode(null))
    return <p/>;
  }

  return (
    <div className='Playlist'>
      <div className='Playlist__header'>
        <h2 style={{width: '312px'}}>Playlist: {roomCode}</h2>
        <button
          className='Playlist__button'
          onClick={() => props.history.push('/search')}
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
      {/* <div className='Playlist__children'>
        <Vote />
      </div> */}
    </div>
  )
});

export default Playlist

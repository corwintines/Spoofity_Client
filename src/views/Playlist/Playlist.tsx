// Libraries
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// Components
import PlaylistSongs from '../../components/PlaylistSongs/PlaylistSongs'

// Utils
import { setArtists } from '../../data/artists/artistsActions'
import { setAlbums } from '../../data/albums/albumsActions'
import { setSearch } from '../../data/search/searchActions'
import { setTracks } from '../../data/tracks/tracksActions'
import { setRoomCode } from '../../data/roomCode/roomCodeActions'

// Styles
import './Playlist.css';
import { SpotifyPlaylistTrackType } from '../../types/SpotifyPlaylistTrackType';

const getPlaylistCodeFromUrl = (pathname: string) => {
  const parts = pathname.split('/').filter(Boolean)
  const roomCode = parts[parts.length - 1].toLocaleUpperCase()
  return roomCode
}

const getPlaylistSongs = async (roomCode: string, offset: number, playlistSongs: Array<SpotifyPlaylistTrackType>, setPlaylistSongs: Function, abortController: any) => {
  const url = new URL('/playlist/tracks', process.env.REACT_APP_SERVER_URL)
  url.searchParams.append('room', roomCode)
  url.searchParams.append('offset', String(offset))

  try {
    const result = await fetch(url.href, {
      method: 'get',
      signal: abortController.signal,
    })
    const json = await result.json()
    const playlist = [...playlistSongs, ...json.items]
    setPlaylistSongs(playlist)
    if (json.next) {
      await getPlaylistSongs(roomCode, offset+100, playlist, setPlaylistSongs, abortController)
    }
  } catch (err) {

  }
}

const Playlist = withRouter((props) => {  
  const dispatch = useDispatch()
  const [roomCode] = useState(getPlaylistCodeFromUrl(props.location.pathname))
  const [playlistSongs, setPlaylistSongs] = useState([])

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    dispatch(setRoomCode(roomCode))
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
    </div>
  )
});

export default Playlist

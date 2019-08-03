// Libraries
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// Components
import Search from '../../components/Search/Search'
import Selection from '../../components/Selection/Selection'

// Utils
import { setRoomCode } from '../../data/roomCode/roomCodeActions'

// Styles
import './Playlist.css';

const getPlaylistCodeFromUrl = (pathname: string) => {
  const parts = pathname.split('/').filter(Boolean);
  const roomCode = parts[parts.length - 1].toLocaleUpperCase();
  return roomCode;
}

const Playlist = withRouter((props) => {  
  const dispatch = useDispatch()
  const [roomCode] = useState(getPlaylistCodeFromUrl(props.location.pathname));
  useEffect(() => {
    dispatch(setRoomCode(roomCode))
  }, [roomCode])
  
  if (!/^[\d\w]{4}$/.test(roomCode)) {
    props.history.replace('');
    dispatch(setRoomCode(null))
    return <p/>;
  }

  const [searchResults, setSearchResults] = useState();

  return (
    <div className="Playlist">
      <p>{roomCode}</p>
      <Search
        setSearchResults={setSearchResults}
      />
      <Selection
        searchResults={searchResults}
      />
    </div>
  )
});

export default Playlist
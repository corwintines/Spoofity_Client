// Libraries
import React, { useState } from 'react'
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
  const roomCode = getPlaylistCodeFromUrl(props.location.pathname);
  if (!/^[\d\w]{4}$/.test(roomCode)) {
    props.history.replace('');
    return <p/>;
  } else {
    dispatch(setRoomCode(roomCode))
  }

  const [searchResults, setSearchResults] = useState();

  return (
    <div className="Playlist">
      <p>{roomCode}</p>
      <Search
        roomCode={roomCode}
        setSearchResults={setSearchResults}
      />
      <Selection
        searchResults={searchResults}
        room={roomCode}
      />
    </div>
  )
});

export default Playlist
// Libraries
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

// Components
import Search from '../Search/Search'

// Styles
import './Playlist.css';

function getPlaylistCodeFromUrl(pathname: string) {
  const parts = pathname.split('/').filter(Boolean);
  const roomCode = parts[parts.length - 1].toLocaleUpperCase();
  return roomCode;
}

const Playlist = withRouter((props) => {  
  const roomCode = getPlaylistCodeFromUrl(props.location.pathname);
  if (!/^[\d\w]{4}$/.test(roomCode)) {
    props.history.replace('');
    return <p/>;
  }

  const [searchResults, setSearchResults] = useState();

  return (
    <div className="Playlist">
      <p>{roomCode}</p>
      <Search roomCode={roomCode} setSearchResults={setSearchResults} />
      {JSON.stringify(searchResults)}
    </div>
  )
});

export default Playlist
// Libraries
import React from 'react'
import { withRouter } from 'react-router-dom'

// Components
import Search from './Search/Search'

// Styles
import './Playlist.css';

function getPlaylistCodeFromUrl(pathname: string) {
  const parts = pathname.split('/').filter(Boolean);
  const shareCode = parts[parts.length - 1].toLocaleUpperCase();
  return shareCode;
}

const Playlist = withRouter((props) => {  
  const playlistCode = getPlaylistCodeFromUrl(props.location.pathname);
  if (!/^[\d\w]{4}$/.test(playlistCode)) {
    props.history.replace('');
    return <p/>;
  }

  return (
    <div className="Playlist">
      <p>{playlistCode}</p>
      <Search />
    </div>
  )
});

export default Playlist
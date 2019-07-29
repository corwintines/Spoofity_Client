// Libraries
import React from 'react'
import { withRouter } from 'react-router-dom'

function getPlaylistCodeFromUrl(pathname: string) {
  const parts = pathname.split('/').filter(Boolean);
  const shareCode = parts[parts.length - 1].toLocaleUpperCase();
  return shareCode;
}

const SongSelection = withRouter((props) => {  
  const playlistCode = getPlaylistCodeFromUrl(props.location.pathname);

  return (
    <>
      {
        !/^\d{4}$/.test(playlistCode) 
        ? props.history.replace('')
        : 
          <div>
            <p>Songs</p>
            <p>{playlistCode}</p>
          </div>
      }
    </>
  )
});

export default SongSelection
// Libraries
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

function getPlaylistCodeFromUrl(pathname: string) {
  const parts = pathname.split('/').filter(Boolean);
  const shareCode = parts[parts.length - 1].toLocaleUpperCase();
  return shareCode;
}

const SongSelection = withRouter((props) => {  
  const [playlistCode] = useState(getPlaylistCodeFromUrl(props.location.pathname));

  useEffect(() => {
    // Validate playlist code
    if (!/^\d{4}$/.test(playlistCode)) {
      props.history.replace('');
    }
  }, [playlistCode]);

  return (
    <div>
      <p>Songs</p>
      <p>{playlistCode}</p>
    </div>
  )
});

export default SongSelection
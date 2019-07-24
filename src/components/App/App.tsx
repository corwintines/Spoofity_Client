// Libraries
import React, { useState } from 'react';

// Components
import Landing from '../Landing/Landing'
import SongSelection from '../SongSelection/SongSelection'

// Styles
import './App.css';

const App: React.FC = () => {
  const [playlistID, setPlaylistID] = useState('');

  return (
    <div className="App">
      {/* TODO: Add logo here */}
      {
        playlistID
          ? <SongSelection playlistID={playlistID} />
          : <Landing setPlaylistID={setPlaylistID}/>
      }
    </div>
  );
}

export default App;

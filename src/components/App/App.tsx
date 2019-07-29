// Libraries
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Landing from '../Landing/Landing'
import SongSelection from '../SongSelection/SongSelection'

// Styles
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        {/* TODO: Add logo here */}

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/:playlistCode" component={SongSelection} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

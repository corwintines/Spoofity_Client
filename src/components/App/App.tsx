// Libraries
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import { QueryParamProvider } from 'use-query-params';
=======
>>>>>>> 890c477... WIP: router

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

<<<<<<< HEAD
        <QueryParamProvider ReactRouterRoute={Route}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/:playlistCode" component={SongSelection} />
          </Switch>
        </QueryParamProvider>
=======
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/:playlistCode" component={SongSelection} />
        </Switch>
>>>>>>> 890c477... WIP: router
      </div>
    </Router>
  );
}

export default App;

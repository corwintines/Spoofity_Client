// Libraries
import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Landing from './views/Landing/Landing'
import Playlist from './views/Playlist/Playlist'

// Utils
import store from './store'

// Styles
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {/* TODO: Add logo here */}

          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/:playlistCode" component={Playlist} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

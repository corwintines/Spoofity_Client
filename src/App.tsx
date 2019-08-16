// Libraries
import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Landing from './views/Landing/Landing'
import Playlist from './views/Playlist/Playlist'
import Search from './views/Search/Search';

// Utils
import store from './store'

// Styles
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='App' style={{height: window.innerHeight}}>
          {/* TODO: Add logo here */}

          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/:playlistCode' component={Playlist} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

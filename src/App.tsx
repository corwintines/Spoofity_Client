// Libraries
import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Components
import Landing from './views/Landing/Landing'
import Login from './views/Login/Login'
import Manage from './views/Manage/Manage'
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
            <Route exact path="/login" component={Login} />
            <Route exact path="/playlist" component={Manage} />
            <Route exact path="/playlist/:playlistCode" component={Playlist} />
            <Redirect exact from="/:playlistCode" to="/playlist/:playlistCode" />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

// Libraries
import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import queryString from 'query-string';

// Utils
import { setToken } from '../../data/token/tokenActions'

// Styles
import './Login.css';

const Login = withRouter((props) => {
  const dispatch = useDispatch();
  const {token, service, error} = queryString.parse(props.location.search);

  useEffect(() => {
    if (error) {
      return;
    }
    if (typeof token !== 'string' || typeof service !== 'string') {
      props.history.replace('');
      return;
    }

    dispatch(setToken({
      token,
      service
    }));

    props.history.replace('playlist');
  }, []);

  return (
    <div className="Login">
      Logging in...

      {error &&
        <span className="Login__error">{error}</span>
      }
    </div>
  );
});
export default Login;
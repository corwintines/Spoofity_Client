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
  const {token_type, access_token, refresh_token, error} = queryString.parse(props.location.search);

  useEffect(() => {
    if (error) {
      return;
    }
    if (typeof token_type !== 'string' || typeof access_token !== 'string' || typeof refresh_token !== 'string') {
      props.history.replace('');
      return;
    }

    dispatch(setToken({
      token_type,
      access_token,
      refresh_token
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

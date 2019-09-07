import { SET_TOKEN, Token, TokenActionTypes } from './types'

const defaultState = {
  token_type: '',
  access_token: '',
  refresh_token: ''
};

const TokenData = (state: Token = defaultState, action: TokenActionTypes) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default TokenData

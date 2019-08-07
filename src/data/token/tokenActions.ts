import {SET_TOKEN, TokenActionTypes, Token} from './types'

export function setToken(token: Token): TokenActionTypes {
  return {
    type: SET_TOKEN,
    payload: {...token}
  }
}
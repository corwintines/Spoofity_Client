export const SET_TOKEN = 'SET_TOKEN';

export interface Token {
  token_type: string
  access_token: string
  refresh_token: string
}

interface SetToken {
  type: typeof SET_TOKEN
  payload: Token
}

export type TokenActionTypes = SetToken;

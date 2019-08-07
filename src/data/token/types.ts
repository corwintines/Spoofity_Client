export const SET_TOKEN = 'SET_TOKEN';

export interface Token {
  token: string
  service: string
}

interface SetToken {
  type: typeof SET_TOKEN
  payload: Token
}

export type TokenActionTypes = SetToken;
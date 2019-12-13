import { SET_ARTISTS } from './artistsActions'
import { Action } from '../../types/Action'

const defaultState = {
  artists: [],
}

const ArtistsData = (state = defaultState, action: Action) => {
  switch (action.type) {
    case SET_ARTISTS:
      return {
        ...state,
        artists: action.payload,
      }
    default:
      return state
  }
}

export default ArtistsData
import { SET_TRACKS } from './tracksActions'
import { Action } from '../../types/Action'

const defaultState = {
  tracks: [],
}

const TracksData = (state = defaultState, action: Action) => {
  switch (action.type) {
    case SET_TRACKS:
      return {
        ...state,
        tracks: action.payload,
      }
    default:
      return state
  }
}

export default TracksData
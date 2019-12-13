import { SET_ALBUMS } from './albumsActions'
import { Action } from '../../types/Action'

const defaultState = {
  albums: [],
}

const AlbumsData = (state = defaultState, action: Action) => {
  switch (action.type) {
    case SET_ALBUMS:
      return {
        ...state,
        albums: action.payload,
      }
    default:
      return state
  }
}

export default AlbumsData
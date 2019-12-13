import { SET_ROOMCODE } from './roomCodeActions'
import { Action } from '../../types/Action'

const defaultState = {
  roomCode: null,
}

const RoomCodeData = (state = defaultState, action: Action) => {
  switch (action.type) {
    case SET_ROOMCODE:
      return {
        ...state,
        roomCode: action.payload,
      }
    default:
      return state
  }
}

export default RoomCodeData
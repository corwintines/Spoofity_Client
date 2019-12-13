import { SET_ROOMCODE } from './roomCodeActions'

const defaultState = {
  roomCode: null,
}

const RoomCodeData = (state = defaultState, action) => {
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
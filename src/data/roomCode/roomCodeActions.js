export const SET_ROOMCODE = 'SET_ROOMCODE'

export function setRoomCode (roomCode) {
  return {
    type: SET_ROOMCODE,
    payload: roomCode,
  }
}
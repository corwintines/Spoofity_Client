export const SET_ROOMCODE = 'SET_ROOMCODE'

export function setRoomCode (roomCode?: string) {
  return {
    type: SET_ROOMCODE,
    payload: roomCode,
  }
}
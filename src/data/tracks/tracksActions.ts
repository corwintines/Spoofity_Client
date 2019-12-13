import { SpotifyTrackType } from '../../types/SpotifyTrackType'

export const SET_TRACKS = 'SET_TRACKS'

export function setTracks (tracks: Array<SpotifyTrackType>) {
  return {
    type: SET_TRACKS,
    payload: tracks,
  }
}

import { SpotifyArtistType } from '../../types/SpotifyArtistType'

export const SET_ARTISTS = 'SET_ARTISTS'

export function setArtists (artists: Array<SpotifyArtistType>) {
  return {
    type: SET_ARTISTS,
    payload: artists,
  }
}
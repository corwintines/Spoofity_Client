import { SpotifyAlbumType } from '../../types/SpotifyAlbumType'

export const SET_ALBUMS = 'SET_ALBUMS'

export function setAlbums (albums: Array<SpotifyAlbumType>) {
  return {
    type: SET_ALBUMS,
    payload: albums,
  }
}
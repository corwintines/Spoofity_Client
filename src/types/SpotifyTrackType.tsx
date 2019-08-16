import { SpotifyAlbumType } from './SpotifyAlbumType'
import { SpotifyArtistType } from './SpotifyArtistType'

export interface SpotifyTrackType {
  album: SpotifyAlbumType,
  artists: Array<SpotifyArtistType>,
  disc_number: number,
  duration_ms: number,
  episode: boolean,
  explicit: boolean,
  external_ids: {
    isrc: string
  },
  external_urls: {
    spotify: string
  },
  href: string,
  id: string,
  is_local: boolean,
  is_playable: boolean,
  name: string,
  popularity: number,
  preview_url: string,
  track: boolean,
  track_number: number,
  type: string,
  uri: string,
}
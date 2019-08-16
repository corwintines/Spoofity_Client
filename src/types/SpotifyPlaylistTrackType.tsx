import { SpotifyTrackType } from './SpotifyTrackType'

export interface SpotifyPlaylistTrackType {
  added_at: string,
  added_by: {
    external_urls: {
      spotify: string,
    }
    href: string,
    id: string,
    type: string,
    uri: string
  },
  is_local: boolean,
  primary_color?: string,
  track: SpotifyTrackType,
  video_thumbnail: {
    url?: string
  }
}
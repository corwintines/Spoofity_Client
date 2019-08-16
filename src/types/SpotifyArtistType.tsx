export interface SpotifyArtistType {
  external_urls: {
    spotify: string,
  }
  spotify: string,
  href: string,
  id: string,
  name: string,
  type: string
  uri: string
  images: Array<{
    height: number,
    url: string,
    width: number,
  }>,
}
import { SpotifyPlaylistTrackType } from '../types/SpotifyPlaylistTrackType';

export const getPlaylistSongs = async (roomCode: string, offset: number, playlistSongs: Array<SpotifyPlaylistTrackType>, setPlaylistSongs: Function, abortController: any) => {
  const url = new URL('/playlist/tracks', process.env.REACT_APP_SERVER_URL)
  url.searchParams.append('room', roomCode)
  url.searchParams.append('offset', String(offset))

  try {
    const result = await fetch(url.href, {
      method: 'get',
      signal: abortController.signal,
    })
    const json = await result.json()
    const playlist = [...playlistSongs, ...json.items]
    setPlaylistSongs(playlist)
    if (json.next) {
      await getPlaylistSongs(roomCode, offset+100, playlist, setPlaylistSongs, abortController)
    }
  } catch (err) {

  }
}
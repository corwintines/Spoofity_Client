export const getAlbumTracks = async (roomCode: string, albumURI: string, abortController: any) => {
  const url = new URL('/album/tracks', process.env.REACT_APP_SERVER_URL)
  url.searchParams.append('room', roomCode)
  url.searchParams.append('albumURI', albumURI)

  try {
    const result = await fetch(url.href, {
      method: 'GET',
      signal: abortController.signal,
    })

    const json = await result.json()

    return json
  } catch (err) {

  }
}
export const getArtistQuery = async (roomCode: string, artistURI: string, abortController: any) => {
  const url = new URL('/artist/query', process.env.REACT_APP_SERVER_URL)
  url.searchParams.append('room', roomCode)
  url.searchParams.append('artistURI', artistURI)

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
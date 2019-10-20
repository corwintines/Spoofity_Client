export const getRecommendedSongs = async (roomCode: string) => {
  const url = new URL('/songRecommendations', process.env.REACT_APP_SERVER_URL)
  url.searchParams.append('room', roomCode)

  try {
    const result = await fetch(url.href, {
      method: 'get',
    })
    const json = await result.json()
    return json
  } catch (err) {

  }
  return []
}
export const getPlaylistCodeFromUrl = (pathname: string) => {
  const parts = pathname.split('/').filter(Boolean)
  const roomCode = parts[parts.length - 1].toLocaleUpperCase()
  return roomCode
}
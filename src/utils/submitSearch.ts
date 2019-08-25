export const submitSearch = async (roomCode: string, searchTerm: string, searchType: string, limit: number, abortController: any) => {
  if (!searchTerm) {
    return
  }

  const url = new URL('/search', process.env.REACT_APP_SERVER_URL);
  url.searchParams.append('room', roomCode);
  url.searchParams.append('q', searchTerm);
  url.searchParams.append('offset', '0');
  url.searchParams.append('limit', String(limit));
  url.searchParams.append('searchType', searchType)

  try {
    const result = await fetch(url.href, {
      method: 'get',
      signal: abortController.signal,
    });
    const json = await result.json();

    return json
  } catch (err) {
    
  }
};
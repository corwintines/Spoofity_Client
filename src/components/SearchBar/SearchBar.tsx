// Libraries
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Actions
import { setArtists } from '../../data/artists/artistsActions'
import { setAlbums } from '../../data/albums/albumsActions'
import { setTracks } from '../../data/tracks/tracksActions'

// Styles
import './SearchBar.css';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch()
  const { roomCode } = useSelector((state: any) => ({
      roomCode: state.RoomCodeData.roomCode,
  }));

  const submitSearch = async (searchTerm: string) => {
    if (!searchTerm) {
      return
    }

    const url = new URL('/search', process.env.REACT_APP_SERVER_URL);
    url.searchParams.append('room', roomCode);
    url.searchParams.append('q', searchTerm);
    url.searchParams.append('offset', '0');
    url.searchParams.append('limit', '4');
    url.searchParams.append('searchType', 'album,artist,track')

    try {
      const result = await fetch(url.href, {
        method: 'get'
      });
      const json = await result.json();

      dispatch(setTracks(json.tracks.items))
      dispatch(setAlbums(json.albums.items.splice(0,2)))
      dispatch(setArtists(json.artists.items.splice(0,1)))
    } catch (err) {
      
    }
  };

  return (
    <div className='SearchBar'>
      <input
        className='SearchBar__input'
        size={30}
        onChange={(e) => {submitSearch(e.target.value)}}
      />
    </div>
  )
}

export default SearchBar
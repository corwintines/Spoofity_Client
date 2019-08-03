// Libraries
import React from 'react'
import { useSelector } from 'react-redux'

// Styles
import './Search.css';

// Interface
interface SearchProps {
  setSearchResults: (results: any) => void;
}

const Search: React.FC<SearchProps> = (props) => {
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
    url.searchParams.append('limit', '50');

    try {
      const result = await fetch(url.href, {
        method: 'get'
      });
      const json = await result.json();

      props.setSearchResults(json);
    } catch (err) {
      
    }
  };

  return (
    <div className="Search">
      <input
        className='Search__input'
        size={30}
        onChange={(e) => {submitSearch(e.target.value)}}
      />
    </div>
  )
}

export default Search
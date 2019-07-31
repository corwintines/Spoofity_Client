// Libraries
import React from 'react'

// Styles
import './Search.css';

// Utils
import { temp } from '../../tempdata'

// Interface
interface SearchProps {
  roomCode: string;
  setSearchResults: (results: any) => void;
}

const Search: React.FC<SearchProps> = (props) => {
  const submitSearch = async (searchTerm: string) => {
    if (!searchTerm) {
      return
    }

    const url = new URL('/search', process.env.REACT_APP_SERVER_URL);
    url.searchParams.append('room', props.roomCode);
    url.searchParams.append('q', searchTerm);
    url.searchParams.append('offset', '0');
    url.searchParams.append('limit', '50');

    try {
      // const result = await fetch(url.href, {
      //   method: 'get'
      // });
      // const json = await result.json();

      const json = temp

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
// Libraries
import React, {createRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// Styles
import './Search.css';

interface SearchProps {
  roomCode: string;
  setSearchResults: (results: any) => void;
}

const Search: React.FC<SearchProps> = (props) => {
  const searchInputRef = createRef<HTMLInputElement>();

  const submitSearch = async () => {
    if (!searchInputRef.current) return;
    const searchTerm = searchInputRef.current.value;

    const url = new URL('/search', process.env.REACT_APP_SERVER_URL);
    url.searchParams.append('room', props.roomCode);
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
        ref={searchInputRef}
      />
      <button
        className='Search__submit'
        onClick={submitSearch}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  )
}

export default Search
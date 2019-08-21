// Libraries
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

// Components
import SearchBar from '../../components/SearchBar/SearchBar'
import Selection from '../../components/Selection/Selection'

// Styles
import './Search.css'

// Interface
interface Props {
  show: boolean,
  setSearchDisplay: Function,
  history: {
    goBack: Function
  },
}

const Search: React.FC<Props> = (props) => {
  const [searchResults, setSearchResults] = useState()
  
  return (
    <div className='Search' style={{ display: 'block',  minHeight: '100vh' }}>
      <div className='Search__header'>
        <SearchBar
          setSearchResults={setSearchResults}
        />
        <button
          className='Search__button'
          onClick={() => props.history.goBack()}
        >
          <FontAwesomeIcon
            className='Song__icon'
            icon={faTimes}
            size='2x'
          />
        </button>
      </div>
      <Selection
        searchResults={searchResults}
      />
    </div>
  )
}

export default Search
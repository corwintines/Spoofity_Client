// Libraries
import React from 'react'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

// Components
import SearchBar from '../../components/SearchBar/SearchBar'
import Selection from '../../components/Selection/Selection'

// Styles
import './Search.css'

// Interface

const Search = withRouter((props) => {
  return (
    <div className='Search' style={{ display: 'block',  minHeight: '100vh' }}>
      <div className='Search__header'>
        <SearchBar />
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
      <Selection />
    </div>
  )
})

export default Search
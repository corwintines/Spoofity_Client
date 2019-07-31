// Libraries
import React from 'react'

// Components
import Song from '../Song/Song'

// Styles
import './Selection.css'

// Interface
interface Props {
  searchResults: {
    // Just doing tracks for now, can expand later
    tracks: { 
      items: Array<any>
    }
  }
}

const Selection: React.FC<Props> = (props) => {
  return (
    <div className='Selection'>
      {props.searchResults && props.searchResults.tracks.items.map((item) => {
        return <Song song={item} />
      })}
    </div>
  )
}

export default Selection
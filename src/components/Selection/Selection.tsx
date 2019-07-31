// Libraries
import React from 'react'

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
      {JSON.stringify(props.searchResults)}
    </div>
  )
}

export default Selection
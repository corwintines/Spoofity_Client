// Libraries
import React from 'react'
import { useSelector } from 'react-redux'

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
  },
}

const Selection: React.FC<Props> = (props) => {
  const { roomCode } = useSelector((state: any) => ({
    roomCode: state.RoomCodeData.roomCode,
  }));

  return (
    <div className='Selection'>
      {props.searchResults && props.searchResults.tracks.items.map((item) => {
        return (
        <Song
          key={item.uri}
          song={item}
          room={roomCode}  
          addSong
        />
        )
      })}
    </div>
  )
}

export default Selection
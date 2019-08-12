// Libraries
import React from 'react'
import { useSelector } from 'react-redux'

// Components
import Song from '../Song/Song'

// Styles
import './Selection.css'

// Types
import { SpotifyTrackType } from '../../types/SpotifyTrackType';
import { SpotifyAlbumType } from '../../types/SpotifyAlbumType';
import { SpotifyArtistType } from '../../types/SpotifyArtistType';

// Interface
interface Props {
  searchResults: {
    albums: Array<SpotifyAlbumType>,
    artists: Array<SpotifyArtistType>,
    tracks: { 
      items: Array<SpotifyTrackType>
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
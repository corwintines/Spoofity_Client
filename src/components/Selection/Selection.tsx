// Libraries
import React from 'react'
import { useSelector } from 'react-redux'

// Components
import Album from '../Album/Album'
import Artist from '../Artist/Artist'
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
    albums: {
      items: Array<SpotifyAlbumType>
    },
    artists: {
      items: Array<SpotifyArtistType>
    },
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
      {props.searchResults && props.searchResults.albums.items.slice(0, 2).map((item) => {
        return (
          <Album
            key={item.uri}
            album={item}
          />
        )
      })}
      {props.searchResults && props.searchResults.artists.items.slice(0, 1).map((item) => {
        return (
          <Artist
            key={item.uri}
            artist={item}
          />
        )
      })}
    </div>
  )
}

export default Selection
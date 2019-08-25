// Libraries
import React from 'react'
import { useSelector } from 'react-redux'

// Components
import Album from '../Album/Album'
import Artist from '../Artist/Artist'
import ExpandSearchItem from '../ExpandSearchItem/ExpandSearchItem'
import Song from '../Song/Song'

// Styles
import './Selection.css'

// Types
import { SpotifyTrackType } from '../../types/SpotifyTrackType';
import { SpotifyAlbumType } from '../../types/SpotifyAlbumType';
import { SpotifyArtistType } from '../../types/SpotifyArtistType';

const Selection: React.FC = () => {
  const { albums, artists, roomCode, tracks } = useSelector((state: any) => ({
    albums: state.AlbumsData.albums,
    artists: state.ArtistsData.artists,
    roomCode: state.RoomCodeData.roomCode,
    tracks: state.TracksData.tracks,
  }));

  return (
    <div className='Selection'>
      {tracks.map((item: SpotifyTrackType) => {
        return (
        <Song
          key={item.uri}
          song={item}
          room={roomCode}  
          addSong
        />
        )
      })}

      {albums.map((item: SpotifyAlbumType) => {
        return (
          <Album
            key={item.uri}
            album={item}
          />
        )
      })}
      {artists.map((item: SpotifyArtistType) => {
        return (
          <Artist
            key={item.uri}
            artist={item}
          />
        )
      })}
      {(albums.length>0 && tracks.length>0 && artists.length>0) && 
        <>
          <ExpandSearchItem label={'Songs'} searchType={'track'} />
          <ExpandSearchItem label={'Albums'} searchType={'album'} />
          <ExpandSearchItem label={'Artists'} searchType={'artist'} />
        </>
      }
    </div>
  )
}

export default Selection
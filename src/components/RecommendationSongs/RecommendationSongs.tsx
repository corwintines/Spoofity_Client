// Libraries
import React from 'react'

// Components
import Song from '../Song/Song'

// Tracks
import { SpotifyTrackType } from '../../types/SpotifyTrackType';

// Interface
interface Props {
  songs: Array<SpotifyTrackType>
  roomCode: string
}

const RecommendationSongs: React.FC<Props> = (props) => {
  return (
    <div className='RecommendationSongs'>
      <h2>Recommendations:</h2>
      {props.songs && props.songs.map((item, index) => {
        return (
          <Song
            key={index}
            song={item}
            room={props.roomCode}
            addSong={true}
          />
        )
      })}
    </div>
  )
}

export default RecommendationSongs
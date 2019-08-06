// Libraries
import React from 'react'

// Components
import Song from '../Song/Song'

// Interface
interface Props {
  songs: Array<{
    track: {
      album: {
        images: Array<{
          url: string
        }>
      },
      artists: Array<{
        name: string
      }>,
      name: string,
      uri: string
    }
  }>
}

const PlaylistSongs: React.FC<Props> = (props) => {
  return (
    <div className='PlaylistSongs'>
      {props.songs && props.songs.map((item) => {
        return (
          <Song
            key={item.track.uri}
            song={item.track}
            addSong={false}
          />
        )
      })}
    </div>
  )
}

export default PlaylistSongs
// Libraries
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'

//Styles
import './Song.css'

// Type
import { SpotifyTrackType } from '../../types/SpotifyTrackType';

// Interface
interface Props {
  song: SpotifyTrackType,
  room?: string,
  addSong: boolean
}

const Song: React.FC<Props> = (props) => {
  const [added, setAdded] = useState(false)
  const addSong = async (songID: string ) => {
    const url = new URL('/track', process.env.REACT_APP_SERVER_URL)
    try {
      await fetch(url.href, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          room: props.room,
          track_uris: [songID]
        })
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='Song'>
      <div className='Song__image'>
        <img
          src={props.song.album.images[2] ? props.song.album.images[2].url : ''}
          alt={'song'}
          height='50px'
          width='50px'
        />
      </div>
      <div>
        <p className='Song__title'>{props.song.name}</p>
        <p className='Song__artist'>{props.song.artists.map((artist) => {
          return `${artist.name} `
        })}</p>
      </div>
      { props.addSong
          ?
            added 
              ?
                // NOTE: had to wrap in button to maintain size, would like to clean up
                // in future if possible
                <button
                  className='Song__button'
                >
                  <FontAwesomeIcon
                    className='Song__icon'
                    icon={faCheck}
                    size='2x'
                  />
                </button>
              :
                <button
                  className='Song__button'
                  onClick={() => {
                    addSong(props.song.uri)
                    setAdded(true)
                  }}
                >
                  <FontAwesomeIcon
                    className='Song__icon'
                    icon={faPlus}
                    size='2x'
                  />
                </button>
          :
            <></>
      }
    </div>
    
  )
}

export default Song
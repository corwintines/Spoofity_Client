// Libraries
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

//Styles
import './Song.css'

// Interface
interface Props {
  song: {
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
  },
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
          src={props.song.album.images[2].url}
          alt={'album cover'}
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
                    icon={faCheckCircle}
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
                    icon={faPlusCircle}
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
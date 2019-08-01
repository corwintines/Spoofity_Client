// Libraries
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

//Styles
import './Song.css'

// Interface
interface Props {
  song: {
    name: string,
    uri: string
  },
  room: string
}

const Song: React.FC<Props> = (props) => {
  const addSong = async (songID: string ) => {
    const url = new URL('/track', process.env.REACT_APP_SERVER_URL)
    try {
      const res = await fetch(url.href, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          room: props.room,
          track_uris: [songID]
        })
      })

      const json = await res.json()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='Song'>
      <p>{props.song.name}</p>
      <button
        onClick={() => addSong(props.song.uri)}
      >
        <FontAwesomeIcon
          className='Song__icon'
          icon={faDownload}
        />
      </button>
    </div>
    
  )
}

export default Song
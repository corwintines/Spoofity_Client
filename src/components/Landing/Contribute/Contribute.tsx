// Libraries
import React, {createRef} from 'react'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

// Styles
import './Contribute.css'

const Contribute = withRouter((props) => {
  const roomCodeInput = createRef<HTMLInputElement>();

  const submitRoomCode = () => {
    if (!roomCodeInput.current) return;
    const code = roomCodeInput.current.value;

    if (code.length !== 4) return;

    props.history.push(`/${code}`);
  };

  return (
    <div className='Contribute'>
      <input
        className='Contribute__input'
        ref={roomCodeInput}
        minLength={4}
        maxLength={4}
        size={4}
        placeholder='0000'
      />
      <button
        className='Contribute__submit'
        onClick={submitRoomCode}
      >
        <FontAwesomeIcon icon={faPlay} />
      </button>
    </div>
  )
});

export default Contribute;
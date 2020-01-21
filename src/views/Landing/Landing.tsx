// Libraries
import React, { useRef, useState, useEffect } from 'react'

// Components
import Contribute from '../../components/Contribute/Contribute'
import Host from '../../components/Host/Host'
import Cassette from '../../components/Cassette/Cassette'

// Styles
import './Landing.css'

type CassetteState = 'play' | 'pause' | 'fast';

const Landing: React.FC = () => {
  const input = useRef<HTMLInputElement>(null);
  const [code, setCode] = useState('');
  const [state, setState] = useState<CassetteState>('play');

  useEffect(() => {
    if (!input.current) return;
    if (code.length === 4) {
      input.current.classList.add('Landing__input--animated');
      input.current.disabled = true;
      setState('fast');
    } else {
      input.current.classList.remove('Landing__input--animated');
      input.current.disabled = false;
      setState('play');
    }
  }, [code]);

  return (
    <div className='Landing' style={{minHeight: '100vh'}}>

      <div className="Landing__header">
        <Cassette state={state} />

        <h1 className="Landing__title">Cassette</h1>
      </div>

      <div className="Landing__join">
        <h2 className="Landing__join__title">Join a Mix</h2>

        <input ref={input} className="Landing__input" size={6} maxLength={4} placeholder="0000" type="text" onChange={(e) => setCode(e.target.value)} />
      </div>
    </div>
  )
};

export default Landing
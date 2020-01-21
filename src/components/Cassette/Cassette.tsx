import React, {useState, useEffect, CSSProperties} from 'react';
import './Cassette.css'

type CassetteState = 'play' | 'pause' | 'fast';

const animation: {[key in CassetteState]: CSSProperties} = {
  play: {
    animationDuration: '20s',
    animationPlayState: 'running'
  },
  pause: {
    animationPlayState: 'paused'
  },
  fast: {
    animationDuration: '6s',
    animationPlayState: 'running'
  }
}

const Cassette: React.FC<{state: CassetteState}> = ({state}) => {

  return (
    <svg className="Cassette" viewBox="0 0 304 194" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(-248, -174)">
        <path className="Cassette__body" d="M254.5,356v-6.5l-3-3V300.22l3-2.82V186.5a10,10,0,0,1,10-10h271a10,10,0,0,1,10,10V297.9l3,2.82V347l-3,3v5.5a10,10,0,0,1-10,10h-271a10,10,0,0,1-10-10" stroke-miterlimit="10" stroke-width="4"/>

        <line className="Cassette__tape" x1="276" y1="354.5" x2="524" y2="354.5" stroke-miterlimit="10" stroke-width="3"/>

        <circle className="Cassette__inner-reel" cx="339" cy="264" r="16" stroke-miterlimit="10" stroke-width="10" style={animation[state]} />
        <circle className="Cassette__inner-reel" cx="460" cy="264" r="16" stroke-miterlimit="10" stroke-width="10" style={animation[state]} />
        
        <circle className="Cassette__tape Cassette__reel Cassette__reel--left" cx="339" cy="264" r="48" stroke-miterlimit="10" stroke-width="39" style={animation[state]} />
        <circle className="Cassette__tape Cassette__reel Cassette__reel--right" cx="460" cy="264" r="31" stroke-miterlimit="10" stroke-width="5" style={{...animation[state], animationDelay: `calc(-${animation[state].animationDuration} / 2)`}} />
        <line className="Cassette__tape Cassette__tape--left Cassette__tape--rotate" x1="267.2" y1="345" x2="274" y2="249" stroke-miterlimit="10" stroke-width="3" style={animation[state]} />
        <line  className="Cassette__tape Cassette__tape--right Cassette__tape--rotate" x1="532.5" y1="343.5" x2="489.5" y2="253" stroke-miterlimit="10" stroke-width="3" style={animation[state]} />
        <path className="Cassette__spool" style={animation[state]} d="M351.86,263.47a13.3,13.3,0,0,0-1.55-6.22l1.89-1a15.51,15.51,0,0,0-6-6.19l-1.07,1.86a13.31,13.31,0,0,0-6.14-1.75l.08-2.15a15.66,15.66,0,0,0-8.37,2.09l1.08,1.85a13.54,13.54,0,0,0-4.59,4.44l-1.82-1.15A15.45,15.45,0,0,0,323,263.5v0l2.14,0a13.29,13.29,0,0,0,1.54,6.22l-1.9,1a15.51,15.51,0,0,0,6,6.2l1.08-1.86a13.33,13.33,0,0,0,6.14,1.77l-.09,2.15h.61a15.5,15.5,0,0,0,7.76-2.08l-1.08-1.86a13.48,13.48,0,0,0,4.61-4.43l1.81,1.15a15.42,15.42,0,0,0,2.4-8.28v-.05Z" />
        <path className="Cassette__spool" style={animation[state]} d="M473.86,263.47a13.3,13.3,0,0,0-1.55-6.22l1.89-1a15.51,15.51,0,0,0-6-6.19l-1.07,1.86a13.31,13.31,0,0,0-6.14-1.75l.08-2.15a15.66,15.66,0,0,0-8.37,2.09l1.08,1.85a13.54,13.54,0,0,0-4.59,4.44l-1.82-1.15A15.45,15.45,0,0,0,445,263.5v0l2.14,0a13.29,13.29,0,0,0,1.54,6.22l-1.9,1a15.51,15.51,0,0,0,6,6.2l1.08-1.86a13.33,13.33,0,0,0,6.14,1.77l-.09,2.15h.61a15.5,15.5,0,0,0,7.76-2.08l-1.08-1.86a13.48,13.48,0,0,0,4.61-4.43l1.81,1.15a15.42,15.42,0,0,0,2.4-8.28v-.05Z" />
        
        <circle cx="276.5" cy="345.5" r="9" fill="none" stroke="#E4D8B4" stroke-miterlimit="10" stroke-width="4" />
        <circle cx="523.5" cy="345.5" r="9" fill="none" stroke="#E4D8B4" stroke-miterlimit="10" stroke-width="4" />
        <circle cx="330" cy="342" r="7.5" fill="#E4D8B4"/>
        <circle cx="358.5" cy="338.5" r="6" fill="#E4D8B4"/>
        <circle cx="441" cy="339" r="6" fill="#E4D8B4"/>
        <circle cx="469.5" cy="342.5" r="7.5" fill="#E4D8B4"/>       
        
        <polyline points="300 366 310 316 492 316 505 366" fill="none" stroke="#E4D8B4" stroke-miterlimit="10" stroke-width="2" opacity="0.6"/>
        <line x1="299" y1="208" x2="510" y2="208" fill="none" stroke="#E4D8B4" stroke-miterlimit="10" stroke-width="2" opacity="0.6"/>       
      </g>
    </svg>
  )
};

export default Cassette
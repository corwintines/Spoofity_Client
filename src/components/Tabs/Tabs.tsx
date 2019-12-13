// Libraries
import React, { useState } from 'react'

// Styles
import './Tabs.css'

// Interface
interface Props {
  titles: Array<String>
  children: Array<any>
}

const Tabs: React.FC<Props> = (props) => {
  const [selected, setSelected] = useState(0)
  return (
    <>
      <div className='Tabs'>
        {props.titles.map((elem, index) => {
          return (
            <div
              className='Tabs__Tab'
              key={index}
              onClick={() => {setSelected(index)}}
              style={{
                width: `${Math.trunc(100/props.titles.length)}%`,
                color: index === selected ? 'white' : 'rgba(255,255,255,0.6)',
              }}
            >
              <h3>{elem}</h3>
            </div>
          )
        })}
      </div>
      { window.innerWidth < 500  && props.children
        ? props.children.map((child: any, index: Number) => {
          if (index === selected) {
            return child
          }
          return null
        })
        : props.children
      }
    </>
  )
}

export default Tabs
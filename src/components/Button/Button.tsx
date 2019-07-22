// Libraries
import React from 'react'


// Component Interface
type Props = {
  label: string
  click: Function
}

const Button: React.FC<Props> = (props) => {
  return (
    <div className="Button" onClick={() => props.click()}>
      <p>{props.label}</p>
    </div>
  )
}



export default Button

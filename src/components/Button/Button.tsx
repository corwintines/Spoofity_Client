// Libraries
import React from 'react'

// Styles
import './Button.css'

// Component Interface
type Props = {
  label: string
  onClick?: Function
}

const Button: React.FC<Props> = (props) => {
  return (
    <input
      type="submit"
      className="Button"
      onClick={() => props.onClick ? props.onClick() : {}}
      value={props.label}
    />
  )
}



export default Button

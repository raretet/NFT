import React from 'react'
import {Link} from 'react-router-dom'

const Buttons = (props) => {
  return (
    <button className={props.button}><Link to={props.href}>{props.text}</Link></button>
  )
}

export default Buttons
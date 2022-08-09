import React from 'react'
import {Link} from 'react-router-dom'

const Buttons = (props) => {
  if (props.link) {
    return (
      <button className={props.button}><Link to={props.href}>{props.text}</Link></button>
    )
  }

  return (
    <button onClick={() => {
        window.location = props.href
      }} className={props.button}><a href={props.href}>{props.text}</a></button>
  )
}

export default Buttons
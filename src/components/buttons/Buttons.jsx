import React from 'react'

const Buttons = (props) => {
  return (
    <button className={props.button}><a href={props.href}>{props.text}</a></button>
  )
}

export default Buttons
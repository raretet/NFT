import React from 'react'
import styles from './icons.module.css'

const Icons = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.img} alt={props.img}/>
      <span className={styles.text}>{props.text}</span>
    </div>
  )
}

export default Icons

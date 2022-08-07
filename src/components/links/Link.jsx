import React from 'react'
import styles from './Link.module.css'

const Link = (props) => {
  return (
    <div className={styles.link}>
    <a href={props.href}>
        {props.text}
    </a>
    </div>
  )
}

export default Link

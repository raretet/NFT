import React from 'react'
import styles from './Logo.module.css'

const Logo = (props) => {
  return (
    <img className={styles.logo} src={props.img} alt={props.img}/>
  )
}

export default Logo
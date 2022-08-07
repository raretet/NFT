import React from 'react'
import styles from './Founder.module.css'

const Founder = (props) => {
  return (
    <div className={styles.astronaut}>
        <img  src={props.image} alt='Founder'/>
        <div className={styles.title}>{props.name}</div>
        <div className={styles.subtitle}>{props.position}</div>
    </div>
  )
}

export default Founder
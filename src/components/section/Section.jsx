import React from 'react'
import styles from './Section.module.css'

const Section = (props) => {

  let background = props.image

  return (
    <section className={styles.section} style={{backgroundImage: background}}>
    </section>
  )
}

export default Section
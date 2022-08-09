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

//1 
//[img] = /images/traits_outfit.png
//[text] = OUTFIT

//2
//[img] = /images/traits_league.png
//[text] = LEAGUE

//3 
//[img] = /images/traits_tattoo.png
//[text] = TATTOO

//4 
//[img] = /images/traits_haircut.png
//[text] = HAIRCUT

//5 
//[img] = /images/traits_more.png
//[text] = MORE





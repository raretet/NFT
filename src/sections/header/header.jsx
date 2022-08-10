import React from 'react'
import Buttons from '../../components/buttons/Buttons';
import Logo from '../../components/logo/Logo';
import Title from '../../components/title/title';
import { SN } from '../../components/SN/SN';

import '../../pages/index/index.css';

const Header = () => {
  return (
    <header>
    <div className='heroes'>
     <div className='container'>
       <div className='section1_logo'><Logo img='/images/logoWhite.png'/></div>
       <div className='section1_title'><Title text='Blvck Members-Only Experience: Phygital, Fashion & Events.'/></div>
       <div className='section1_button'><Buttons button='button_black' text='Membership Dashboard' href='/dasboard' link/></div>
       <div className='section1_button_grey'><Buttons button='button_grey' text='Join the Discord' href='https://discord.com/invite/blvckparis'/></div>
       <div className='section1_SN'>
       <span className='SN'><SN img='/images/social_instagram.png' href='https://instagram.com/black'/></span>
       <span className='SN'><SN img='/images/social_twitter.png' href='https://twitter.com/blvckparis'/></span>
       <span className='SN'><SN img='/images/social_opensea.png' href='https://opensea.io/collection/blvckgenesis'/></span>
       </div>
     </div>
     </div>
   </header>
  )
}

export default Header
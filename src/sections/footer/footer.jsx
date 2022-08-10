import React from 'react'
import Buttons from '../../components/buttons/Buttons';
import Link from '../../components/links/Link';
import Logo from '../../components/logo/Logo';
import { SN } from '../../components/SN/SN';
import { Outlet } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <Outlet/>
    <footer className='footer'>
        <div className='footer_image'>
          <Logo img='/images/logo_blvck.png'/>
        </div>
        <div className='footer_btn'>
          <Buttons button='button_black' text='join the discord' href='https://discord.com/invite/blvckparis'/>
        </div>
        <div className='footer_SN'>
          <div>
          <SN img='/images/social_instagram.png' href='https://instagram.com/black'/>
          </div>
          <div>
          <SN img='/images/social_twitter.png' href='https://twitter.com/blvckparis'/>
          </div>
          <div>
          <SN img='/images/social_opensea.png' href='https://opensea.io/collection/blvckgenesis'/>
          </div>
        </div>
        <div className='footer_links'>
          <div>
            <Link text='Contact Us' href='https://blvck.com/pages/contact'/>
          </div>
          <div>
            <Link text='Terms' href='https://emea.blvck.com/pages/terms-of-service'/>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
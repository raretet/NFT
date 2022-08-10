import React from 'react'
import { SN } from '../../components/SN/SN';
import Founder from '../../components/team/Founder';
import Title from '../../components/title/title';

const Team = () => {
  return (
    <section className='section7'>
        <div className='section7_container'>
          <div className='section7_content'>
            <div className='section7_title'><Title text='Team'/></div>
            <div className='section7_mainFounder'><Founder image='/images/avatar_01.jpg' name='Julian O.hayon' position='Founder & Designer of Blvck'/></div>
            <div className='section7_SN-container'>
              <div className='section7_SNs'>
              <div className='section7_SN'><SN img='/images/social_instagram.png' href='https://instagram.com/anckor'/></div>
              <div className='section7_SN'><SN img='/images/social_opensea.png' href='https://opensea.com/'/></div>
              </div>
            </div>
            <div className='section7_founders'>
            <Founder image='/images/avatar_01.jpg' name='GORAN' position='Chief Metaverse'/>
            <Founder image='/images/avatar_02.jpg' name='THOMAS' position='Strategy'/>
            <Founder image='/images/avatar_03.jpg' name='YUKAI' position='Asia Distribution'/>
            <Founder image='/images/avatar_04.jpg' name='AXEL' position='Discord Manager'/>
            <Founder image='/images/avatar_05.jpg' name='DRAKO' position='Community Manager'/>
            <Founder image='/images/avatar_06.jpg' name='STEFFI' position='Community Manager'/>
            <Founder image='/images/avatar_07.jpg' name='ZORAN' position='Head of Cinematic'/>
            <Founder image='/images/avatar_08.jpg' name='LUDO' position='Unreal Engine Dev'/>
            <Founder image='/images/avatar_09.jpg' name='JONATHAN' position='Marketing'/>
            <Founder image='/images/avatar_10.jpg' name='VIC' position='3D Designer'/>
            <Founder image='/images/avatar_11.jpg' name='DIORELE' position='Illustrator'/>
            <Founder image='/images/avatar_12.jpg' name='RICHARD' position='Legal'/>
            <Founder image='https://img.seadn.io/files/a4b954ebab8a6806729f4ef32bd0d3f1.png?fit=max&w=132' name='REMY BIGOT' position='Community Manager'/>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Team
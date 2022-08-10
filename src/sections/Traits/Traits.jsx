import React from 'react'
import Title from '../../components/title/title';
import Subtitle from '../../components/subtitle/Subtitle';
import Icons from '../../components/icons/icons';


const Traits = () => {
  return (
    <section>
    <div className='darker'>
      <div className='section4_content'>
        <div className='section4_title'>
          <Title text='The Darker, the rarer.'/>
        </div>
        <div className='section4_subtitle'>
          <Subtitle text='With over 250 High Fashion traits.'/>
        </div>
        <div className='icons'>
          <div className='icon_container'>
            <Icons img='/images/traits_outfit.png' text='OUTFIT'/>
          </div>
          <div className='icon_container'>
            <Icons img='/images/traits_league.png' text='LEAGUE'/>
          </div>
          <div className='icon_container'>
            <Icons img='/images/traits_tattoo.png' text='TATTOO'/>
          </div>
          <div className='icon_container'>
            <Icons img='/images/traits_haircut.png' text='HAIRCUT'/>
          </div>
          <div className='icon_container'>
            <Icons img='/images/traits_more.png' text='MORE'/>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Traits
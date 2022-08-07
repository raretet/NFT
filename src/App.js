import { useState } from 'react';
import './App.css';
import Buttons from './components/buttons/Buttons';
import Icons from './components/icons/icons';
import Link from './components/links/Link';
import Logo from './components/logo/Logo';
import Roadmap from './components/roadmap/Roadmap';
import Section from './components/section/Section';
import { SN } from './components/SN/SN';
import Subtitle from './components/subtitle/Subtitle';
import Founder from './components/team/Founder';
import Title from './components/title/title';

const titleList = ['Blvck Phantoms','Blvck Shadows' ]
const textList = [ 'Introducing the rarest 10% of the Blvck Genesis NFT collection, the Blvck Phantoms. Characterised by their wings made of light and shining grey skin, the 999 Phantoms roam freely in Blvck City. Blvck Phantoms remain emotionless and live without feelings.',  'Introducing the rarest 1% of Blvck Genesis, the Shadows. There are only 99 of them, characterised by their metallic dark skin and can be found in the depths of Blvck Land. Blvck Shadows are the firstborns of the Blvck Realm, their immortality is under threat in a world tainted by myths. <br/><br/> Act II depicts the rebellion of the Shadows against the Phantoms to claim what was once theirs. The rise of the Shadows has began.']

function App() {

  const [titleIndex, setTitleIndex] = useState(0)
  const [textIndex, setTextIndex] = useState(0)

  return (
    <div className="App">
      <section>
       <div className='heroes'>
        <div className='container'>
          <div className='section1_logo'><Logo img='/images/logoWhite.png'/></div>
          <div className='section1_title'><Title text='Blvck Members-Only Experience: Phygital, Fashion & Events.'/></div>
          <div className='section1_button'><Buttons button='button_black' text='Membership Dashboard' href=''/></div>
          <div className='section1_button_grey'><Buttons button='button_grey' text='some text' href=''/></div>
          <div className='section1_SN'>
          <span className='SN'><SN img='/images/social_instagram.png' href='https://instagram.com/'/></span>
          <span className='SN'><SN img='/images/social_twitter.png' href='https://twitter.com/blvckparis'/></span>
          <span className='SN'><SN img='/images/social_opensea.png' href='https://opensea.io/collection/blvckgenesis'/></span>
          </div>
        </div>
        </div>
      </section>

      <section>
        <div className='roadmap'>
          <div className='section2_title'>
            <Title text='Roadmap'/>
          </div>
          <div className='section2_subtitle'>
            <Subtitle text='Every owner of a Blvck Genesis NFT gains member access to a world of exclusive merch, benefits, airdrops & more.'/>
          </div>
          <div className='section2_content'>
            <div className='section2_img'>
              <img src='/images/astronaut2.png' alt=''/>
            </div>
            <div className='content_roadmap'>
            <Roadmap/>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='acts'>
          <div className='act_container'>
              <div className='section3_content'>
                <div className='section3_header'>
                    <button onClick={() => {setTextIndex(0); setTitleIndex(0)}}>ACT I</button>
                    <button onClick={() => {setTextIndex(1); setTitleIndex(1)}}>ACT II</button>
                    <button className='disabled_button' onClick={() => setTextIndex(1)} disabled>ACT III</button>
                </div>
              <div className='section3_text'>
                <h1 className='section3_title' >{titleList[titleIndex]}</h1>
                <div className='section3_subtitle' >{textList[textIndex]}</div>
              </div>
            </div>
          </div>
          <div className='play'>
            <img src='/images/play-button.svg' alt=''/>
            <div className='section3_link'>
              <a href='https://youtube.com'>Play Now </a>
            </div>
          </div>
        </div>
      </section>

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
              <Icons img='/images/traits_outfit.png' text='OUTFIT'/>
              <Icons img='/images/traits_league.png' text='LEAGUE'/>
              <Icons img='/images/traits_tattoo.png' text='TATTOO'/>
              <Icons img='/images/traits_haircut.png' text='HAIRCUT'/>
              <Icons img='/images/traits_more.png' text='MORE'/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;


/* <SN img='/images/social_instagram.png' href='https://instagram.com/'/>
<Title text='Title'/>
<Subtitle text='Every owner of a Blvck Genesis NFT gains member access to a world of exclusive merch, benefits, airdrops & more.'/>
<Icons img='/images/traits_outfit.png' text='OUTFIT'/>
<Buttons button='button_black' text='some text' href=''/>
<Buttons button='button_grey' text='some text' href=''/>
<Link text='Some link' href=''/>
<Founder image='/images/avatar_01.jpg' name='Some name' position='Some position'/>
<Logo img='/images/logoWhite.png'/>
<Logo img='/images/logo_blvck.png'/>
<Roadmap/> */
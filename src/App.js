import { useState } from 'react';
import './App.css';
import Buttons from './components/buttons/Buttons';
import Icons from './components/icons/icons';
import Link from './components/links/Link';
import Logo from './components/logo/Logo';
import Roadmap from './components/roadmap/Roadmap';
import { SN } from './components/SN/SN';
import Subtitle from './components/subtitle/Subtitle';
import Founder from './components/team/Founder';
import Title from './components/title/title';

const titleList = ['Blvck Phantoms','Blvck Shadows' ]
const textList = [ 'Introducing the rarest 10% of the Blvck Genesis NFT collection, the Blvck Phantoms. Characterised by their wings made of light and shining grey skin, the 999 Phantoms roam freely in Blvck City. Blvck Phantoms remain emotionless and live without feelings.',  'Introducing the rarest 1% of Blvck Genesis, the Shadows. There are only 99 of them, characterised by their metallic dark skin and can be found in the depths of Blvck Land. Blvck Shadows are the firstborns of the Blvck Realm, their immortality is under threat in a world tainted by myths. Act II depicts the rebellion of the Shadows against the Phantoms to claim what was once theirs. The rise of the Shadows has began.']

function App() {

  const [titleIndex, setTitleIndex] = useState(0)
  const [textIndex, setTextIndex] = useState(0)

  return (
    <div className="App">
      <header>
       <div className='heroes'>
        <div className='container'>
          <div className='section1_logo'><Logo img='/images/logoWhite.png'/></div>
          <div className='section1_title'><Title text='Blvck Members-Only Experience: Phygital, Fashion & Events.'/></div>
          <div className='section1_button'><Buttons button='button_black' text='Membership Dashboard' href=''/></div>
          <div className='section1_button_grey'><Buttons button='button_grey' text='Join the Discord' href='https://discord.com/invite/blvckparis'/></div>
          <div className='section1_SN'>
          <span className='SN'><SN img='/images/social_instagram.png' href='https://instagram.com/'/></span>
          <span className='SN'><SN img='/images/social_twitter.png' href='https://twitter.com/blvckparis'/></span>
          <span className='SN'><SN img='/images/social_opensea.png' href='https://opensea.io/collection/blvckgenesis'/></span>
          </div>
        </div>
        </div>
      </header>

      <section className='section2'>
        <div className='roadmap'>
          <div className='section2_title'>
            <Title text='Roadmap'/>
          </div>
          <div className='section2_subtitle'>
            <Subtitle text='Every owner of a Blvck Genesis NFT gains member access to a world of exclusive merch, benefits, airdrops & more.'/>
          </div>
          <div className='section2_content'>
            <div className='content_roadmap'>
            <Roadmap/>
            </div>
            <div className='section2_img'>
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
                <img src='/images/play-button.svg' alt=''/>
              </div>
            </div>
          </div>
          <div className='play'>
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

      <section className='section5_container'>
        <div className='about'>
          <div>
            <div>
              <Title text='About'/>
            </div>
            <div className='section5_text'>
              <p>The project is led by Blvck Paris, global lifestyle fashion brand founded in 2017 by French designer, Julian O’hayon, endorsed and supported by an engaged community with millions of social media followers and customers worldwide. Blvck is known for its ‘All Black’ clothing, accessories and digital goods. From visual content to merchandise, Blvck strives to pioneer an aspirational lifestyle pursuing quality and design. In 2021, the brand opened stores worldwide in Tokyo, Miami, Taipei, Taichung, Hong Kong and Macau and collaborated with tech giant, CASETiFY. In the NFT space, Blvck previously introduced three NFT drops on MakersPlace and held an event on Decentraland. </p>
            </div>
          </div>
        </div>
      </section>

      <section className='section6'>
        <div className='section6_container'>
          <div className='section6_content'>
            <h2>as see on</h2>
            <div className='section6_images'>
              <img className='forbes' src='/images/featured_forbes.png' alt=''/>
              <img className='hypebeast' src='/images/featured_hypebeast.png' alt=''/>
              <img className='decentraland' src='/images/featured_decentraland.png' alt=''/>
              <img className='entrepreneur' src='/images/featured_entrepreneur.png' alt=''/>
              <img className='vogue' src='/images/featured_vogue.png' alt=''/>
              <img className='makersplace' src='/images/featured_makersplace.png' alt=''/>
            </div>
          </div>
        </div>
      </section>

      <section className='section7'>
        <div className='section7_container'>
          <div className='section7_content'>
            <div className='section7_title'><Title text='Team'/></div>
            <div className='section7_mainFounder'><Founder image='/images/avatar_01.jpg' name='Julian O.hayon' position='Founder & Designer of Blvck'/></div>
            <div className='section7_SN-container'>
              <div className='section7_SNs'>
              <div className='section7_SN'><SN img='/images/social_instagram.png' href='https://instagram.com/'/></div>
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

      <section className='section8'>
        <div className='section8_container'>
          <div className='section8_content'>
            <div className='section8_header'>
              <h2>
                <span>BACKED BY</span>
                <br/>
                <img src='/images/logo_coinsilium@2x.png' alt=''/>
              </h2>
            </div>
            <p>Coinsilium is a focused Blockchain venture operator based in Gibraltar. In 2015, Coinsilium became the first blockchain company to IPO. The Company is a highly regarded innovator with proven technological and commercial expertise and development capabilities in the NFT arena and also within Open Finance.</p>
          </div>
        </div>
      </section>

      <section className='section9'>
        <div className='section9_container'>
          <div className='section9_content'>
            <div className='section9_header'>
              <h2>
                <img src='/images/blvck_x_horagames.png' alt=''/>
              </h2>
            </div>
            <p>To make this collection truly unique & a next-level experience, Blvck partnered up with Hora Games, who established themselves as one of the pioneers in the play-to-earn (P2E) gaming genre. Their project Crypto Idle Miner propelled them into a casual gaming sphere with a never-seen-before concept, rewarding players based on their leaderboard position. Hora Games is one of the first P2E companies that successfully launched their project on Google Play & App Store in 2019. Today, they have over 700,000 downloads on both platforms!</p>
            <p>Now, we are expanding their metaverse experience to include NFT playable content, making this collaboration even more innovative, exciting, and exclusive!</p>
          </div>
        </div>
      </section> 

      <footer className='footer'>
        <div className='footer_image'>
          <Logo img='/images/logo_blvck.png'/>
        </div>
        <div className='footer_btn'>
          <Buttons button='button_black' text='join the discord' href='https://discord.com/invite/blvckparis'/>
        </div>
        <div className='footer_SN'>
          <div>
          <SN img='/images/social_instagram.png' href='https://instagram.com/'/>
          </div>
          <div>
          <SN img='/images/social_twitter.png' href='https://instagram.com/'/>
          </div>
          <div>
          <SN img='/images/social_opensea.png' href='https://instagram.com/'/>
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
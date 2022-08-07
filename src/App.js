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

function App() {
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
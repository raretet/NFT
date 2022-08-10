import React from 'react'
import Title from '../../components/title/title';
import Subtitle from '../../components/subtitle/Subtitle';
import Roadmap from '../../components/roadmap/Roadmap';

const RoadmapNFT = () => {
  return (
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
  )
}

export default RoadmapNFT
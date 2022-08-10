import React from 'react'
import RoadmapNFT from '../sections/Roadmap/Roadmap';
import Acts from '../sections/Acts/Acts';
import Traits from '../sections/Traits/Traits';
import About from '../sections/About/About';
import Featured from '../sections/Featured/Featured';
import Team from '../sections/Team/Team';
import BackedBy from '../sections/BackedBy/BackedBy';
import HoraGames from '../sections/HoraGames/HoraGames';

const Sections = () => {
  return (
    <>
    <RoadmapNFT/>
    <Acts/>
    <Traits/>
    <About/>
    <Featured/>
    <Team/>
    <BackedBy/>
    <HoraGames/>
    </>
  )
}

export default Sections
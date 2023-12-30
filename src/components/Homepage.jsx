import React from 'react';
import Navbar from './Navbar';
import ParticleRing from './ParticleRing';
import TiltCard from './TiltCard';
import MouseTrail from './MouseImageTrail';
import HorizontalScrollCarousel from './HorizontalScrollCarousel';
import TimeLine from './TimeLine';

export default function Homepage() {
  return (
    <div className="bg-[#10172a]">
     <div id="particleRing"><ParticleRing /></div>
     <div id="tiltCard" >  <TiltCard /></div>
     <div id="timeLine"> <TimeLine  /></div>
     
     
      <div className="py-20 px-20" id="mouseTrail">
        <MouseTrail />
      </div>
      <div id="horizontalCarousel" ><HorizontalScrollCarousel /></div>

    </div>
  );
}

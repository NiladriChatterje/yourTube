import React from 'react';
import './MiniCircles.css';

const MiniCircles = () => {
  return (
    <div>
       <div className='bottom-circle'></div>
      <div className='top-circle1'></div>
      <div className='top-circle2'></div>
      <div className='top-circle3'></div>
      <div id="mini-1" className='sub-bottom-circle1' style={{top:'10vh',left:'10vw'}}></div>
      <div id="mini-2" className='sub-bottom-circle1' style={{top:'30vh',left:'20vw'}}></div>
      <div id="mini-3" className='sub-bottom-circle1' style={{top:'70vh',left:'50vw'}}></div>
      <div id="mini-4" className='sub-bottom-circle1' style={{top:'90vh',left:'60vw'}}></div>
      <div id="mini-5" className='sub-bottom-circle1' style={{bottom:'30vh',right:'20vw'}}></div>
      <div id="mini-6" className='sub-bottom-circle1' style={{top:'1vh',right:'1vw'}}></div>
      <div id="mini-7" className='sub-bottom-circle1' style={{top:'20vh',right:'10vw'}}></div>
      <div id="mini-8" className='sub-bottom-circle1' style={{top:'40vh',left:'50vw'}}></div>
      <div id="mini-9" className='sub-bottom-circle1' style={{bottom:'5vh',left:'5vw'}}></div>
    </div>
  )
}

export default MiniCircles
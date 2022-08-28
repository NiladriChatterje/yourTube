import React from 'react'
import './SuggestedVideos.css';
import Loader from '../Loader';

const suggestions1 = ['All','Coding Ninjas','Web Dev Simplified', ' CSS battle','ICE','Ironman','Spiderman','GTA5','Movies']

const SuggestedVideos = () => {
  const [suggestions,setSuggestions] =React.useState(() => []);

  const wheelEvent = React.useCallback((e)=>{
    e.preventDefault();
      Array.from(document.getElementsByClassName('suggest-container'))[0].scrollLeft =
      Array.from(document.getElementsByClassName('suggest-container'))[0].scrollLeft + e.deltaY;
  });

  return (
    <div className='suggest-container' 
    onWheel={e => wheelEvent(e)}
    >
        {suggestions1.map((item) =>
         <span>{item}</span>
        )};
    </div>
  )
}

export default SuggestedVideos
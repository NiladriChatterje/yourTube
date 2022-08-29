import React from 'react'
import './SuggestedVideos.css';
import {Link} from 'react-router-dom';

const SuggestedVideos = ({suggestions}) => {
  

  const wheelEvent = React.useCallback((e)=>{
    e.preventDefault();
      Array.from(document.getElementsByClassName('suggest-container'))[0].scrollLeft =
      Array.from(document.getElementsByClassName('suggest-container'))[0].scrollLeft + e.deltaY;
  });

  return (
    <div className='suggest-container' 
    onWheel={e => wheelEvent(e)}
    >
        {suggestions?.map((item) =>
         <Link>{item}</Link>
        )};
    </div>
  )
}

export default SuggestedVideos
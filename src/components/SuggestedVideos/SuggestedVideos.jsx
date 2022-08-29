import React from 'react'
import './SuggestedVideos.css';
import {Link} from 'react-router-dom';

const SuggestedVideos = ({suggestions,setCommentState}) => {


  const wheelEvent = React.useCallback((e)=>{
    e.preventDefault();
      Array.from(document.getElementsByClassName('suggest-container'))[0].scrollLeft =
      Array.from(document.getElementsByClassName('suggest-container'))[0].scrollLeft + e.deltaY*1.5;
  });

  return (
    <div className='suggest-container' 
    onWheel={e => wheelEvent(e)}
    >
        {suggestions?.map((item,i) =>
         <Link key={i}
          onClick={()=>{setCommentState(prev=>!prev)}}
          to={`/channel/${item?.snippet?.channelId}`} 
          style={{textDecoration:'none',color:'white'}}>
            <span>
              {item?.snippet?.channelTitle}
            </span>
         </Link>
        )};
    </div>
  )
}

export default SuggestedVideos
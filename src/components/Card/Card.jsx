import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({videoItem,i,setIsToggle,setSuggestions}) => {



  return (
    <Link to={`/player/${videoItem.id.videoId}`} 
    style={{textDecoration:'none',color: 'black'}}
     key={i} 
     onClick={()=>{setIsToggle(prev =>!prev);
                setSuggestions(videoItem.id.videoId)}} >
    <div className={'video-cards'}>
              <img src={videoItem.snippet?.thumbnails?.medium?.url}
                    alt=""
                    width={videoItem.snippet?.thumbnails?.medium?.width}
                    height={videoItem.snippet?.thumbnails?.medium?.height}
              />
              <h4>{videoItem.snippet.title}</h4>
          {videoItem.snippet.channelTitle}
          <span className='Line'></span>
          <span id="publish">{videoItem.snippet.publishTime}</span>
          <h3>{videoItem.snippet.channelTitle}</h3>
          <h5>{videoItem.snippet.description}</h5>
          </div>
    </Link>
  )
}

export default Card
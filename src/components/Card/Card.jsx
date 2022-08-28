import React from 'react';
import './Card.css';

const Card = ({videoItem,i}) => {
  return (
    <div key={i} className={'video-cards'}>
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
  )
}

export default Card
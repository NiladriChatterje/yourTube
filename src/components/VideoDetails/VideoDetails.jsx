import React from 'react';
import { Link } from 'react-router-dom';
import './VideoDetails.css';

const VideoDetails = ({videodetails,setCommentState}) => {


  console.log(videodetails)
  return (
    <div className={'video-details'} >
      {videodetails && 
      
      <div>
        <div className='title'>
          <span>{videodetails[0]?.snippet?.title}</span>
        </div>
        <div className='videolikes'>
          <span>{videodetails[0]?.snippet?.statistics?.viewCount}</span>
          <span>{videodetails[0]?.snippet?.statistics?.likeCount}</span>

        </div>
        <Link to={`/channel/${videodetails[0]?.snippet?.channelId}`} 
        style={{textDecoration:'none',color:'black'}} 
        onClick={()=>{
          setCommentState(prev => !prev);
        }}>
        <span className='channel-title'>
        &#123; {videodetails[0]?.snippet.channelTitle} &#125;
        </span>
        </Link>
        <div
        style={{height:'5px',
          width:'75vw',borderRadius:'10px',
          backgroundColor:'white',position:'relative',
          left:'50%',transform:'translateX(-50%)'}}>

          </div>


         {videodetails[0]?.snippet?.localized?.description &&
         
         <div className='description'>
          <span>DESCRIPTION:<br/><br/><br/></span>
            {videodetails[0]?.snippet?.localized?.description}
          </div>}
          <div
        style={{height:'5px',
          width:'75vw',borderRadius:'10px',
          backgroundColor:'white',position:'relative',
          left:'50%',transform:'translateX(-50%)'}}>

          </div>

          <div
        style={{height:'5px',marginTop:'20px',
          width:'55vw',borderRadius:'10px',
          backgroundColor:'white',position:'relative',
          left:'50%',transform:'translateX(-50%)'}}>

          </div>


      </div> }
    </div>
  )
}

export default VideoDetails
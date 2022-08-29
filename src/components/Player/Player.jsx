import React from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import './Player.css';
import axios from 'axios';
import VideoDetails from '../VideoDetails/VideoDetails';
import Comments from '../Comments/Comments';



const Player = ({isToggle,setCommentState}) => {
  const [videodetails,setVideodetails] = React.useState(() => []);
  const [comments,setComments] = React.useState(()=>[]);
    const {id} = useParams();
    console.log(id);



    React.useMemo(async ()=>{

        const {data : {items}} = await axios.get('https://youtube-v31.p.rapidapi.com/videos',
        {
          params: {part: 'contentDetails,snippet,statistics',
           id: `${id}`},
          headers: {
            'X-RapidAPI-Key': '3224681278mshdf603cd43fde3cbp13a2f6jsnf3ec618192c1',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
          }
      }).then(res => res)
        .then(data => data).catch(err => console.log(err));

        console.log(items);
        setVideodetails(items);


        const {data} = await axios.get('https://youtube-v31.p.rapidapi.com/commentThreads',
        {
         
          params: {part: 'snippet', videoId: '7ghhRHRP6t4', maxResults: '100'},
          headers: {
            'X-RapidAPI-Key': '3224681278mshdf603cd43fde3cbp13a2f6jsnf3ec618192c1',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
          }
        }
        );

        setComments(data.items);
        console.log(data.items);


        
    
    },[isToggle]);


    try{
   



  return (
    <div className='react-player-container'>
       <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} 
       className="react-player"
       width="100%"
       height="100%"
       controls/>

        <VideoDetails videodetails={videodetails} />
        <Comments comments={comments} setCommentState={setCommentState} />
    </div>
  )
    }
    catch(err){
        console.log(err);
    }
}

export default Player;
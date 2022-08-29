import React from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import './Player.css';
import axios from 'axios';
import VideoDetails from '../VideoDetails/VideoDetails';
import Comments from '../Comments/Comments';



const Player = ({isToggle,setCommentState,setSuggestions,textstate}) => {
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
            'X-RapidAPI-Key': '23512ed8dcmsh480a23b5a80fb35p1219bajsnebe530750740',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
          }
      }).then(res => res)
        .then(data => data).catch(err => console.log(err));

        console.log(items);
        setVideodetails(items);


        const {data} = await axios.get('https://youtube-v31.p.rapidapi.com/commentThreads',
        {
         
          params: {part: 'snippet', videoId: `${id}`, maxResults: '100'},
          headers: {
            'X-RapidAPI-Key': '23512ed8dcmsh480a23b5a80fb35p1219bajsnebe530750740',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
          }
        }
        );

        setComments(data.items);
        console.log(data.items);
        

        let Response = await axios.get(`https://youtube-v31.p.rapidapi.com/search?q=${textstate}`,{
          params: {
            part: 'id,snippet',
            maxResults: '25'
          },
          headers: {
            'X-RapidAPI-Key': '23512ed8dcmsh480a23b5a80fb35p1219bajsnebe530750740',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
          }
        })
    .then(Response => Response).then(data => data)
    .catch(err => console.log(err));
    setSuggestions(Response.data.items);
  
    
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
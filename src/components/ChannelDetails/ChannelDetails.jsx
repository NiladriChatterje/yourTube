import React from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './ChannelDetails.css';
import Card from '../Card/Card';

const ChannelDetails = ({commentState,setIsToggle}) => {
    const [channelDetails,setChannelDetails] = React.useState(()=>{});
    const [videoList,setVideoList] =React.useState(()=>[]);

    const { id } = useParams();

    React.useMemo(async ()=>{
        const {data:{items} } = await axios.get('https://youtube-v31.p.rapidapi.com/channels',{
            params: {part: 'snippet,statistics', 
            id: `${id}`},
            headers: {
              'X-RapidAPI-Key': '3224681278mshdf603cd43fde3cbp13a2f6jsnf3ec618192c1',
              'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
          }).then(res => res).then(data => data)
        .catch(err => err);
          console.log(items[0]);
          setChannelDetails(items[0]);



          const {data} = await axios.get('https://youtube-v31.p.rapidapi.com/search',{
            params: {
                channelId: `${id}`,
                part: 'snippet,id',
                order: 'date',
                maxResults: '50'
              },
            headers: {
              'X-RapidAPI-Key': '3224681278mshdf603cd43fde3cbp13a2f6jsnf3ec618192c1',
              'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
          }).then(res => res).then(data => data)
        .catch(err => err);
        console.log(data.items)
          setVideoList(data.items);

    },[commentState]);


  return (
    <div>
        <img src={channelDetails?.snippet?.thumbnails?.default?.url}
        className='img-profile'/>
    <div 
    className='channel-container'>
        <span className='text-style'>{channelDetails?.snippet?.title}</span>
        <span className='text-style'>{channelDetails?.snippet?.country}</span>
        <span className='text-style'>{channelDetails?.snippet?.customUrl}</span>
        <span className='text-style desc'>{channelDetails?.snippet?.description}</span>
        <span className='text-style'>{channelDetails?.snippet?.publishedAt}</span>
       {channelDetails?.snippet?.statistics?.subscriberCount && <div><span
        className='subscriber'>{channelDetails?.snippet?.statistics?.subscriberCount}
        </span>&nbsp;&nbsp;&nbsp;Subscribers</div> }
        {channelDetails?.snippet?.statistics?.videoCount && <div><span
        className='subscriber'>{channelDetails?.snippet?.statistics?.videoCount}
        </span>&nbsp;&nbsp;&nbsp;Videos</div> }
            <span className='playLists'>PlayLists:</span>
            <div className='only-for-cards'>
            {videoList?.map((item,i)=>{
                return <Card i={i} videoItem={item} setIsToggle={setIsToggle} key={i}/>
            })}
            </div>
           
    </div>
    </div>
  )
}

export default ChannelDetails
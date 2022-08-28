import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../Card/Card.jsx';
import './Body.css';

const Body = ({videoList}) => {
  return (
    <div className='Body'>
      {videoList?.map((item,i)=>{
        return <Card key={i} videoItem={item} />
      })}
    </div>
  )
}

export default Body
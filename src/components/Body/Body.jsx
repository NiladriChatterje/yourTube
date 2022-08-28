import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../Card/Card.jsx';
import './Body.css';
import Loader from '../Loader';


const Body = ({videoList,isLoading}) => {
  return (
    <div className='Body'>
      {isLoading?<Loader />:
      videoList?.map((item,i)=>{
        return <Card key={i} videoItem={item} />
      })}
    </div>
  )
}

export default Body
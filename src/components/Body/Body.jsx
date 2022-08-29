import React from 'react'
import Card from '../Card/Card.jsx';
import './Body.css';
import Loader from '../Loader';


const Body = ({videoList,isLoading,setIsToggle}) => {
  return (
   
    <div className='Body'>
      {isLoading?<Loader />:
      videoList?.map((item,i)=>{
        return <Card key={i} videoItem={item} 
          setIsToggle={setIsToggle} />
      })}
    </div>
   
  )
}

export default Body
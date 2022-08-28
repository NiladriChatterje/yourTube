import axios from 'axios'
import React from 'react'

const getVideoData = async () => {
  const {data} = await axios.get(baseURL,{
    params:{

    }
  }).catch(err => console.log(err));

  return (
   null
  )
}

export default getVideoData
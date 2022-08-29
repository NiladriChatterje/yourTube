import React from 'react'
import './Comments.css'

const Comments = ({comments}) => {
  return (
    <div className='comment-container'>
        <span>COMMENTS :<br /></span>
        {comments?.map((item) =>{
            return <div className='comment-box'>
                <div className='author-details'>
                  <img src={item.snippet?.topLevelComment?.snippet?.authorProfileImageUrl || 'http://raysensenbach.com/wp-content/uploads/2013/04/default.jpg'}/>
                    <span>{item.snippet?.topLevelComment?.snippet?.authorDisplayName}</span>
                    </div>
                    <span>{item.snippet?.topLevelComment?.snippet?.textOriginal}</span>
                    <span>{item.snippet?.topLevelComment?.snippet?.publishedAt}</span>
                    <div
                        style={{height:'2px',marginTop:'20px',
                        width:'55vw',borderRadius:'10px',
                        backgroundColor:'rgb(65, 65, 100)',position:'relative',
                        left:'50%',transform:'translateX(-50%)'}}>

          </div>
                </div>
        })}

    </div>
  )
}

export default Comments
import React from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css';

const categories = ['Musics','Entertainment',
'Gaming','News','Coding','Experiments']

const Sidebar = ({setText}) => {
  return (<>
    <div className='sidebar-container'>
      {categories?.map((item) =>{
        return  <div 
        className='sidebar-list'
        onClick={() =>{
          console.log(item)
          setText(item);
        }}
        >
          <Link         
        to={`/`} 
        
        style={{textDecoration:'none',color:'black'}}> 
          {item}
          </Link>
        </div>
        
      })}
    </div>
    </>
  );
}

export default Sidebar;
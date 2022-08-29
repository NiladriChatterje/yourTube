import React from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css';

const categories = ['Musics','Entertainment',
'Gaming','News','Coding','Experiments']

const Sidebar = ({setText}) => {
  return (<>
    <div className='sidebar-container'>
      {categories?.map((item) =>{
        return  <Link to={`/`} 
        onClick={() =>{
          setText(item);
        }}
        style={{textDecoration:'none'}}> 
        <div 
        className='sidebar-list'
        >

          {item}
        </div>
        </Link>
      })}
    </div>
    </>
  );
}

export default Sidebar;
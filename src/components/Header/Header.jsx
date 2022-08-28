import React from 'react';
import './Header.css';
import  Search from '../../search_icon.svg.png';
import axios from 'axios';



const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      part: 'id,snippet',
      maxResults: '25'
    },
    headers: {
      'X-RapidAPI-Key': '3224681278mshdf603cd43fde3cbp13a2f6jsnf3ec618192c1',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


const Header = ({setVideoList,setIsLoading}) => {
const [isDark,setDark] = React.useState(() => true);
const [isSidebar,setIsSidebar] = React.useState(()=>true);
const [isSearchActive,setIsSearchActive] = React.useState(()=>false);


const getSearchData = React.useCallback(async (text="coding")=>{
    setIsLoading(true);
    let {data:{items}} = await axios.get(`https://youtube-v31.p.rapidapi.com/search?q=${text}`,options)
    .then(Response => Response).then(data => data)
    .catch(err => console.log(err));
    setIsLoading(false);
    setVideoList(items);
    console.log(items);
    return items;
},[isSearchActive]);


React.useEffect(()=>{
    getSearchData();
},[])

  return (
    <div >
        <nav>
            <img src={Search} alt=""
            onClick={() => {
                document.getElementById('input').focus();
                if(!document.getElementById('input').value)
                   alert('Empty Search is Not possible');

                // setIsSearchActive(prev =>!prev);
            }}  />
            <input type={'text'}  id='input' 
            onKeyDownCapture={e => {
                            if(e.key === "Enter")
                               {
                                setIsSearchActive(prev => !prev);
                                getSearchData(document.getElementById('input').value);
                                
                               } }}/>
            <div onClick={()=>{
                if(isDark)
                   { Array.from(document.getElementsByTagName('body'))[0].style.backgroundImage = 'linear-gradient(to bottom right,rgb(192,195,204),rgb(50, 38, 120))';
                   Array.from(document.getElementsByClassName('bottom-circle'))[0].style.backgroundColor =  'rgb(3,12,46)'; 
                   Array.from(document.getElementsByClassName('top-circle1'))[0].style.backgroundColor =  'rgb(3,12,46)'; 
                   Array.from(document.getElementsByClassName('top-circle2'))[0].style.backgroundColor =  'rgb(255,255,255)';
                   Array.from(document.getElementsByClassName('top-circle3'))[0].style.backgroundColor =  'rgb(229, 221, 255)'; 
                   Array.from(document.getElementsByClassName('sub-bottom-circle1')).map((item)=>{
                    item.style.backgroundColor ='rgb(3,12,46)';
                    item.style.boxShadow ='rgb(100,125,255)';
                return undefined;});
                   setDark(false);
                   }
                else{
                    Array.from(document.getElementsByTagName('body'))[0].style.backgroundImage =  'linear-gradient(to bottom right,rgb(192,195,244),rgb(56, 38, 190))'; 
                    Array.from(document.getElementsByClassName('bottom-circle'))[0].style.backgroundColor =  'rgb(83,45,255)';
                    Array.from(document.getElementsByClassName('top-circle2'))[0].style.backgroundColor =  'rgb(55,35,95)'; 
                    Array.from(document.getElementsByClassName('top-circle1'))[0].style.backgroundColor =  'rgb(83,45,255)';
                    Array.from(document.getElementsByClassName('top-circle3'))[0].style.backgroundColor =  'rgb(80, 65, 144)';
                    Array.from(document.getElementsByClassName('sub-bottom-circle1')).map((item)=>{
                        item.style.backgroundColor ='rgb(83,45,255)';
                        item.style.boxShadow ='rgb(35,25,70)';
                    return undefined;
                });
                   
                    setDark(true);
                }
            }}></div>
            <div 
                onClick={() => {
                    if(!isSidebar)
                    {Array.from(document.getElementsByClassName('sidebar-container'))[0].style.visibility ='visible';
                    Array.from(document.getElementsByClassName('sidebar-container'))[0].style.transform = 'translateX(0px)';
                    setIsSidebar(prev => !prev);
                }
                else{
                    Array.from(document.getElementsByClassName('sidebar-container'))[0].style.transform = 'translateX(-600px)';
                    Array.from(document.getElementsByClassName('sidebar-container'))[0].style.visibility ='visible';
                    setIsSidebar(prev => !prev);
                }
                }}></div>
                <span>YOUR-TUBE</span>
        </nav>
    </div>
  )
}

export default Header;
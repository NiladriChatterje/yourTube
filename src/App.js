import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Body from './components/Body/Body';
import MiniCircles from './components/MiniCircles/MiniCircles';

function App() {
  const [videoList,setVideoList] = React.useState(() => []);
  
  return (
    <div className="App">
      <Header setVideoList={setVideoList} videoList={videoList} />
      <div>
        <Sidebar setVideoList={setVideoList}/>
        <Body videoList={videoList} />
      </div>
      <div className='bottom-circle'></div>
      <div className='top-circle1'></div>
      <div className='top-circle2'></div>
      <div className='top-circle3'></div>
      <MiniCircles />
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Body from './components/Body/Body';
import MiniCircles from './components/MiniCircles/MiniCircles';

function App() {
  const [videoList,setVideoList] = React.useState(() => []);
  const [isLoading,setIsLoading] = React.useState(() => true);
  
  return (
    <div className="App">
      <Header setVideoList={setVideoList} videoList={videoList} setIsLoading={setIsLoading} />
      <div>
        <Sidebar setVideoList={setVideoList}/>
        <Body videoList={videoList} isLoading={isLoading} />
      </div>
      <MiniCircles />
    </div>
  );
}

export default App;

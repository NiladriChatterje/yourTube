import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Body from './components/Body/Body';
import MiniCircles from './components/MiniCircles/MiniCircles';
import SuggestedVideos from './components/SuggestedVideos/SuggestedVideos';
import Player from './components/Player/Player';
import { Route, Routes } from 'react-router-dom';
import ChannelDetails from './components/ChannelDetails/ChannelDetails';

function App() {
  const [videoList,setVideoList] = React.useState(() => []);
  const [isLoading,setIsLoading] = React.useState(() => true);
  const [isToggle,setIsToggle] = React.useState(()=> false);
  const [suggestions,setSuggestions] =React.useState(() => []);
  const [commentState,setCommentState] =React.useState(() => true);
  const [textstate,setText] = React.useState(() => 'coding');


  return (
    <>
    <div className="App">
      <Header 
          textstate={textstate}
          setVideoList={setVideoList}
           setIsLoading={setIsLoading}
           setSuggestions={setSuggestions} />

      <SuggestedVideos suggestions={suggestions} 
        setCommentState={setCommentState} />
      
      <div className='sidebar-body'>
        <Sidebar setText={setText} setIsToggle={setIsToggle} />
        <Routes>
        <Route path="/" element={<Body 
                    videoList={videoList} 
                    isLoading={isLoading} 
                    setIsToggle={setIsToggle}/>} />
        <Route path="/player/:id" element={<Player isToggle={isToggle} setSuggestions={setSuggestions} setCommentState={setCommentState} />} />
        <Route path="/channel/:id" element={<ChannelDetails setIsToggle={setIsToggle} commentState={commentState} />} />
        </Routes>
      </div>

      
    </div>
    <MiniCircles />
    </>
  );
}

export default App;

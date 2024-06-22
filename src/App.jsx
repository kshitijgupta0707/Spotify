// rafce

import React, { useContext, useRef } from 'react'
import Sidebar from './Components/Sidebar'
import Player from './Components/Player'
import Display from './Components/Display'
import { PlayerContext } from './Context/PlayerContext'
import { useLocation } from 'react-router-dom'
import Wave from './Components/Wave'
import DisplayPlayer from './Components/DisplayPlayer'
const App = () => {
  //use context hook to access that context

  const { audioRef, track } = useContext(PlayerContext);
  console.log(track);

  const location = useLocation();
  const shouldHideContent = location.pathname === '/song'

  // const a = track.file + "#t=00:03:10"
  


  return (
    <div className='h-screen bg-black' >
      <div className='h-[90%] flex justify-center' >
        <div style={{ display: shouldHideContent ? 'none' : 'block' }}>
          <Sidebar />
        </div >

        <Display />
        {/* <Sidebar /> */}
      </div>


      {/* <Wave/> */}
      <Player />
      {/* //pause play change suing ref */}

      <audio ref={audioRef} preload='auto' src={track.file}></audio>
    </div >
  )
}

export default App
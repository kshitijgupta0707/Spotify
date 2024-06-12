// rafce

import React, { useContext, useRef } from 'react'
import Sidebar from './Components/Sidebar'
import Player from './Components/Player'
import Display from './Components/Display'
import { PlayerContext } from './Context/PlayerContext'
const App = () => {
  //use context hook to access that context

  const { audioRef, track } = useContext(PlayerContext);
  console.log(track);


  return (
    <div className='h-screen bg-black' >
      <div className='h-[90%] flex' >
        <Sidebar />
        <Display />
      </div>
      <Player />
      {/* //pause play change suing ref */}
          <audio ref={audioRef} preload='auto' src={track.file}></audio>
    </div>
  )
}

export default App
// rafce

import React, { useContext } from 'react'
import Layout from './Layout'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import { PlayerContext } from './Context/PlayerContext'

const App = () => {
  const {audioRef} = useContext(PlayerContext);

  return (
    
   <Routes>
         <Route path= '/' element = {<Home/>} >

         </Route>
         
          <Route path = '/*' element = {<Layout/>}  > </Route>

   </Routes>
  )
}

export default App
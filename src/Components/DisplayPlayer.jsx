import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Wave from './Wave'
import Player from './Player'

const DisplayPlayer = () => {
  return (
    <div>
    <Routes>

        <Route path='/song' element={<Wave />} >

        </Route>
      
        <Route path='/' element={<Player />}>
        </Route>
      </Routes>

    </div>
  )
}

export default DisplayPlayer
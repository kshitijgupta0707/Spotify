import React, { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'
import Search from './Search'
import Songscreen from './Songscreen'
const Display = () => {

  const displayRef = useRef();
  const location = useLocation();

  const isAlbum = location.pathname.includes('album');;
  //  console.log(isAlbum);  
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  // console.log(pathname);
  const bgColor = albumsData[Number(albumId)].bgColor;
  // console.log(bgColor);

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor} , #121212 )`
    } else {
      displayRef.current.style.background = `#121212`
    }
  })


  //  console.log(location);
  //  console.log(displayRef);
  return (
    <div ref={displayRef} className=' w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%]  lg:ml-0' >

      <Routes>

        <Route path='/Home' element={<DisplayHome />} >
        </Route>
        {/* : helps to take id  in display album elemnenbt componenet  */}
        <Route path='/album/:id' element={<DisplayAlbum />}>
        </Route>

        <Route path='/song' element={<Songscreen />}>
        </Route>

        
        <Route path='/search' element={<Search />}>
        </Route>

      </Routes>


    </div>
  )
}

export default Display
import React, { useCallback, useContext } from 'react'
import "./Search.css"
import { PlayerContext } from '../Context/PlayerContext'
const SearchSong = ({namee, image, audiofile , desc = "playing hard" , duration = "0:29" }) => {
    const { playWithAudio } = useContext(PlayerContext);
   
    return (

        <div className="child" onClick={() => {
          
            console.log(`play ${audiofile}`)
        }} >
            <img className="img" src={image} alt="" />
            <p>{namee}</p>
        </div>

    )
}

export default SearchSong
import React, { useCallback, useContext } from 'react'
import "./Search.css"
import { PlayerContext } from '../Context/PlayerContext'





const SearchSong = ({ namee, image, audiofile, desc = "playing hard", duration = "0:29" }) => {


    const { playWithAudio } = useContext(PlayerContext);

    const audio = {
        id: 1,
        name: namee,
        image: image,
        file: audiofile,
        desc: desc,
        duration: duration,
    }
    return (


        <div className="child" onClick={() => {
            playWithAudio(audio)
        }} >
            <img className="img" src={image} alt="" />
            <p className='para' >{namee.slice(0,24)}</p>
        </div>

    )
}

export default SearchSong
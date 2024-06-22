import React, { useCallback, useContext, useRef , useEffect} from 'react'
import NavBar from './NavBar'
import './songs.css'
import { PlayerContext } from '../Context/PlayerContext'
const Songscreen = () => {
    const mainn = useRef(null);
    const { track } = useContext(PlayerContext);
    const divStyle = {
        backgroundImage: `url(${track.image})`
    }

    // Function to generate random color
    // const randomColorGen = () => {
    //     let a = '#';
    //     let str = '0123456abcdef';
    //     for (let i = 0; i < 6; i++) { // Changed to 6 to generate a full hex color code
    //         let randomIndex = Math.floor(Math.random() * str.length); // Changed to str.length to generate all 16 characters
    //         a += str[randomIndex];
    //     }
    //     return a;
    // };
    // setInterval(() => {
    //     mainn.current.style.backgroundColor = randomColorGen();
    // }, 1000)

    return (
        <>
            <div ref={mainn} className='main' >
                <div style={divStyle} className='bg-image w-72 ' >

                </div>
                <div className='bg-text' >
                    <h2 className='item' >{track.name}</h2>
                    {/* <img className='item' src={track.image} alt="" /> */}
                    <h4 className='item' >{track.desc}</h4>
                </div>
            </div>
        </>
    )
}

export default Songscreen
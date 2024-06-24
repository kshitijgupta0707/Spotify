// rafce

import React, { useContext, useEffect, useRef } from 'react'
import Sidebar from './Components/Sidebar'
import Player from './Components/Player'
import Display from './Components/Display'
import { PlayerContext } from './Context/PlayerContext'
import { useLocation } from 'react-router-dom'
const Layout = () => {
    //use context hook to access that context

    const { audioRef, track, loaded, setLoaded, play, pause, playStatus, next, prev } = useContext(PlayerContext);
    // console.log(track);

    const location = useLocation();
    const shouldHideContent = location.pathname === '/song'

    

    if (!loaded) {
        setLoaded(true);
    }



    // useEffect(() => {
    //     // This effect runs once when component mounts
    //     window.location.reload();
    // }, []); // Empty dependency array ensures this effect runs only once


    // document.addEventListener('keyup', (e) => {
    //     console.log(e);
    //     console.log(e.code);
    //     if (e.code == 'Space') {
    //         console.log('playsong')
    //         if (playStatus) {
    //             pause();
    //         }
    //         else {
    //             play();
    //         }

    //     }
    //     else if (e.code == 'ArrowRight') {
    //         next();
    //     }
    //     else if (e.code == 'ArrowLeft') {
    //         prev();
    //     }
    // })


    



    return (
        
        <div className='h-screen bg-black' >
            <div className='h-[90%] flex justify-center' >
                <div style={{ display: shouldHideContent ? 'none' : 'block' }}>
                    <Sidebar />
                </div >

                <Display />

            </div>
            <Player />

            <audio ref={audioRef} preload='auto' src={track.file}></audio>
        </div >
    )
}

export default Layout
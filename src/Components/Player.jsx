import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../Context/PlayerContext'
import { useLocation, useNavigate } from 'react-router-dom'
import './Player.css'
const Player = () => {

    const navigate = useNavigate();
    const location = useLocation().pathname;
    const { track, seekBar, seekBar2, seekBg, playStatus, setPlayStatus, pause, play, time, setTime, next, prev, handleVolumeChange, volume, audioRef, handleSeek, onlyChangeSlideBar, handleMouseUp, handleMouseDown} = useContext(PlayerContext);

  


    return (
        <div className=' h-[10%] bg-black flex justify-between items-center text-white px-4' >
            <div className='leftPlayer' >
                <img onClick={() => {
                    console.log(location);
                    if (location === '/song')
                        navigate('/');
                    else
                        navigate('/song')


                }} className='w-12' src={track.image} alt="" />
                <div>
                    <p>{track.name.slice(0,23)}</p>
                    <p>{track.desc.slice(0, 12)}</p>
                </div>
            </div>

            <div className='flex flex-col items-center gap-1 m-auto ' >
                <div className='flex gap-4' >
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                    <img onClick={prev} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                    {playStatus ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" /> : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />}
                    <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
                </div>



                <div className='flex items-center gap-5' >
                    <p className='timee'  >{`${time.currentTime.minute} : ${time.currentTime.second}`}</p>
                    <div onMouseDown={handleMouseDown} onClick={handleSeek} ref={seekBg} className='w-[60vw] max-w-[500px]  bg-gray-300 rounded-full cursor-pointer relative' >
                        {/* <div className=' w-fit' >.</div> */}
                        <hr ref={seekBar} className='h-1.5 w-[0%] bg-green-700 border-none  z-10 relative ' />    {/* <hr className='h-1  border-none w-0 bg-green-800 rounded-full' /> */}
                        <hr ref={seekBar2} className='h-1.5 w-[0%] bg-[#494949] border-none absolute top-0 z-5  max-w-[100%]' />    {/* <hr className='h-1  border-none w-0 bg-green-800 rounded-full' /> */}
                    </div>

                    <p className='timee' >{isNaN(time.totalTime.minute) ? "00:00" : `${time.totalTime.minute} : ${time.totalTime.second}`}</p>
                </div>

            </div>
            <div className='rightPlayer' >
                <img className='w-4' src={assets.plays_icon} alt="" />
                <img className='w-4' src={assets.mic_icon} alt="" />
                <img className='w-4' src={assets.queue_icon} alt="" />
                <img className='w-4' src={assets.speaker_icon} alt="" />
                <img className='w-4' src={assets.volume_icon} alt="" />

                <input
                    className=' h-1 text-green-600 bg-green-700'
                    id="volume"
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                />


                <img className='w-4' src={assets.mini_player_icon} alt="" />
                <img onClick={() => {
                    console.log(location);
                    if (location === '/song')
                        navigate('/');
                    else
                        navigate('/song')


                }} className='w-4' src={assets.zoom_icon} alt="" />
            </div>
        </div>
    )
}

export default Player
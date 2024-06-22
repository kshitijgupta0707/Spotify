//we are using create context API

import { createContext, useEffect, useState } from "react";
import { useRef } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    const seekBar2 = useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    });
    const [trackEnded, setTrackEnded] = useState(false);
    const [volume, setVolume] = useState(1);
    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
    };
    const play = () => {
        console.log("Song is played");
        audioRef.current.play();
        setPlayStatus(true);

    }
    const pause = () => {
        console.log("Song is paused");
        audioRef.current.pause();
        setPlayStatus(false);
    }


    const playWithId = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    }

    async function prev() {
        if (track.id > 0) {
            await setPlayStatus(false);
            await setTrack(songsData[track.id - 1]);
            await audioRef.current.play();
            setPlayStatus(true);
            console.log("Prev music is played");
        }
    }
    async function next() {
        if (track.id <= songsData.length - 2) {
            await setPlayStatus(false);
            await setTrack(songsData[track.id + 1]);
            await audioRef.current.play();
            setPlayStatus(true);
            console.log("next music is played");
        }
    }



    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                const sec = Math.floor(audioRef.current.currentTime % 60)
                const min = Math.floor(audioRef.current.currentTime / 60)
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
                setTime({
                    currentTime: {
                        minute: min < 10 ? '0' + min : min.toString(),
                        second: sec < 10 ? '0' + sec : sec.toString()
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                })
                if (audioRef.current.currentTime == audioRef.current.duration) {
                    console.log("track endedd")
                    pause()
                    audioRef.current.currentTime = 0;
                    console.log(audioRef.current.currentTime);
                    setTrackEnded(true);


                }
            }
        }, 0)
    }, [audioRef])
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseDown = () => {
        setIsDragging(true);
        // audioRef.current.pause();
        window.addEventListener('mousemove', onlyChangeSlideBar);
        window.addEventListener('mouseup', handleSeek);
        window.addEventListener('mouseup', handleMouseUp);
        // audioRef.current.play()
    }
    const handleMouseUp = () => {
        seekBar2.current.style.width = "0%";
        setIsDragging(false);
        window.removeEventListener('mouseup', handleSeek);
        window.removeEventListener('mousemove', onlyChangeSlideBar);
        window.removeEventListener('mouseup', handleMouseUp);
    };
    useEffect(() => {
        if (trackEnded) {
            change();
            setTrackEnded(false); // Reset trackEnded state
        }
    }, [trackEnded]);
    async function change() {
        await next()
        await play()

    }
    const handleSeek = (e) => {
        const seekBarRect = seekBg.current.getBoundingClientRect();
        // it provide the the x coordinates of extreme left div
        console.log(seekBarRect.left);
        // it provide the the x coordinates of extreme right div
        console.log(e.clientX);
        console.log(seekBarRect.right);
        const clickPositionX = e.clientX - seekBarRect.left;
        const percentage = (clickPositionX / seekBarRect.width) * 100;
        const totalTime = time.totalTime.minute * 60 + time.totalTime.second
        const updatedTime = (percentage / 100) * totalTime;
        const updatedMin = Math.floor(updatedTime / 60);
        const updatedSec = Math.floor(updatedTime % 60);
        setTime({
            currentTime: {
                minute: updatedMin < 10 ? '0' + updatedMin : updatedMin.toString(),
                second: updatedSec < 10 ? '0' + updatedSec : updatedSec.toString()
            },
            totalTime: {
                second: Math.floor(audioRef.current.duration % 60),
                minute: Math.floor(audioRef.current.duration / 60)
            }
        })
        seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
        seekBar2.current.style.width = "0%";
        audioRef.current.currentTime = updatedTime

        // Update current playback time
        // Assuming you have a function in PlayerContext to seek to a specific time
    }
    const onlyChangeSlideBar = (e) => {
        const seekBarRect = seekBg.current.getBoundingClientRect();
        const clickPositionX = e.clientX - seekBarRect.left;
        const percentage = (clickPositionX / seekBarRect.width) * 100;
        const totalTime = time.totalTime.minute * 60 + time.totalTime.second
        const updatedTime = (percentage / 100) * totalTime;
        const updatedMin = Math.floor(updatedTime / 60);
        const updatedSec = Math.floor(updatedTime % 60);
        seekBar2.current.style.width = (Math.floor(updatedTime / audioRef.current.duration * 100)) + "%";

    }

    const contextValue = {
        audioRef,
        seekBg,
        seekBar, seekBar2,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play, pause,
        playWithId,
        next, prev,
        volume,
        handleVolumeChange,
        handleSeek, onlyChangeSlideBar,
        handleMouseDown, handleMouseUp
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )


}
export default PlayerContextProvider;
import React, { useCallback, useContext } from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom'
import { PlayerContext } from '../Context/PlayerContext'
const Home = () => {
    // const handleClick = async () => {
    //     console.log("handle click function is called");
    //     const client_id = "7311d6e0f01b460bad757315350d7ac0";
    //     const redirect_uri = "http://localhost:5173/home";
    //     const api_uri = "https://accounts.spotify.com/authorize";
    //     const scope = [
    //         "user-read-private",
    //         "user-read-email",
    //         "user-modify-playback-state",
    //         "user-read-playback-state",
    //         "user-read-currently-playing",
    //         "user-read-recently-played",
    //         "user-top-read",
    //     ];
    //     window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
    //         " "
    //     )}&response_type=token&show_dialog=true`;
    //     console.log("handle click done");
    // };

    const {audioRef} = useContext(PlayerContext);
    const handleConnect = () => {
        navigate('/home')
    }

    const navigate = useNavigate();
    return (
        <div className='mainContainer' >
            <img
            className='mainContainerImg'
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
                alt="spotify"
            />
            <button className='mainContainerBtn'  onClick={handleConnect}>Connect Spotify</button>
        </div>
    )
}

export default Home
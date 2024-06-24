import { useContext, useEffect, useState } from "react";
import "./Search.css"
import { PlayerContext } from '../Context/PlayerContext'

import SearchSong from "./SearchSong";
function Search() {
    const [value, setValue] = useState("romantic");
    const [song, setSong] = useState();
    const [tracks, setTracks] = useState([]);
    const { searchInputRef } = useContext(PlayerContext);
    const focusOnSearchBox = () => {
        searchInputRef.current.focus();
    }
    const callApi = async () => {
        console.log("Searching for" + value)
        let data = await fetch(`https://v1.nocodeapi.com/kshitijjjj/spotify/MQHbPUjwzbyCyJmg/search?q=${value}&type=track`)
        data = await data.json();
        data = data.tracks.items;
        console.log(data);
        setTracks(data);

    }

    useEffect(() => {
        callApi();
        focusOnSearchBox()
    },[]) 
    




    return (
        <>
            <div >
                <form onSubmit={(e) => {
                    e.preventDefault();
                }} >
                    <input
                        ref={searchInputRef}
                        className="searchInputBox"
                        placeholder="Search"
                        type="text"

                        onChange={(e) => { setValue(e.target.value) }}
                    />
                    <span
                        className="searchBtn"
                        onClick={() => {
                            console.log("clickeed");
                             callApi();
                        }} > Submit </span>

                </form>
              
                    <div className="item main">

                    {
                        tracks.map((element, index) => {
                            return <SearchSong key={index} namee={element.name} image={element.album.images[0].url} audiofile={element.preview_url} />
                        })
                    }
                    </div>
               

            </div>
        </>
    )
}

export default Search

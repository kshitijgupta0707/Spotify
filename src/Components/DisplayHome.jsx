import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import SongsItem from './SongsItem'
import { useLocation } from 'react-router-dom';

const DisplayHome = () => {
    const location = useLocation();
    // useEffect(() => {
    //     // Check if the page has been loaded before using sessionStorage
    //     const hasReloaded = sessionStorage.getItem('hasReloaded');
    //     console.log(hasReloaded)
    //     if (!hasReloaded) {
    //         // Set the flag to indicate the page has been reloaded
    //         sessionStorage.setItem('hasReloaded', 'true');

    //         // Reload the page
    //         window.location.reload();
    //     }
         
    // }, [location.pathname]);
    // useEffect(() => {
    //     const hasReloaded = sessionStorage.getItem('hasReloaded');

    //     if (!hasReloaded) {
    //         // Set the flag to indicate the page has been reloaded
    //         sessionStorage.setItem('hasReloaded', 'true');

    //         // Reload the page
    //         window.location.reload();
    //     } else {
    //         // Remove the flag for future navigations (optional)
    //         sessionStorage.removeItem('hasReloaded');
    //     }
    // }, [location.key]);

  
 

    return (
        <div>
            <NavBar />

            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl' > Featured chats </h1>
                <div className='flex overflow-auto'  >
                    {albumsData.map((element, index) => {
                        return <AlbumItem key={index} image={element.image} name={element.name} desc={element.desc} id={index} />
                    })}
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl' > Today's Big Hits  </h1>
                <div className='flex overflow-auto'  >
                    {
                        songsData.map((item, index) => {
                            return <SongsItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default DisplayHome
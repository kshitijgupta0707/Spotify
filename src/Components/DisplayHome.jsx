import React from 'react'
import NavBar from './NavBar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import SongsItem from './SongsItem'
const DisplayHome = () => {
    return (
        <div>
            <NavBar />

            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl' > Featured chats </h1>
                <div className='flex overflow-auto'  >
                    {albumsData.map((element, index) => {
                        return <AlbumItem image={element.image} name={element.name} desc={element.desc} id={index} />
                    })}
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl' > Today's Big Hits  </h1>
                <div className='flex overflow-auto'  >
                    {
                        songsData.map((item , index)=>{
                        return  <SongsItem key={index} name={item.name} desc ={item.desc} id={item.id} image={item.image}   />
                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default DisplayHome
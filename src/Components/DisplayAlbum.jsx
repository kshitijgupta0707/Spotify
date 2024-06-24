import React, { useContext } from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../Context/PlayerContext';
import './DisplayAlbum.css'
const DisplayAlbum = () => {
    // const { playWithId } = useContext(PlayerContext);
    const { id } = useParams();
    const albumData = albumsData[id];
    const { playWithId } = useContext(PlayerContext)
    // console.log(albumData);
    // const bgColor = albumData.bgColor;
    // const divStyle = { background: `linear-gradient(${bgColor}, #121212 `

    // }
    return (

        <>
            {/* <div>
            // style={divStyle}  */}


            <NavBar />
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end' >

                <img className='w-48' src={albumData.image} alt="" />
                <div className='flex flex-col' >
                    <p>Playlist</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl' >{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <p className='spotifyContainer'>
                        <img className='w-5 inline' src={assets.spotify_logo} alt="" />
                        <b>Spotify </b>
                        1,323,154 likes
                        <b>50 Songs</b>
                        about 2 hr 30 min
                    </p>
                </div>
            </div>

            <div className=' gridHeading '  >
                <p className=' text-left' > <b className='mr-4' >#</b>Title </p>
                <p className='trending' > Album</p>
                <p className=' dateAdded '  >Date added</p>
                <img className='gridImage' src={assets.clock_icon} alt="" />
            </div>
            <hr />
            {
                albumData.songs.map(value => {
                    return <div   onClick={() => { playWithId(value) }} key={value} className= ' gridValues' >

                        <p className='text-white text-left ' >
                            <b className='mr-4 text-[#a7a7a7]' >
                                {value + 1}
                            </b>
                            <img className=' imageimage dateAdded ' src={songsData[value].image} alt="" />
                            {songsData[value].name}
                        </p>
                        <p className='text-[15px]  trending' > {albumData.name} </p>
                        <p className='text-[15px]   dateAdded  ' > 5 days ago</p>
                        <p className='text-[15px] text-center ' > {songsData[value].duration}  </p>



                    </div>
                })
                //     songsData.map((item, index) => {

                //         return <div onClick={()=>{playWithId(item.id)}} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer' >

                //             <p className='text-white' >
                //                 <b className='mr-4 text-[#a7a7a7]' >
                //                     {index + 1}
                //                 </b>
                //                 <img className=' hidden sm:inline  w-10 mr-5 ' src={item.image} alt="" />
                //                 {item.name}
                //             </p>
                //             <p className='text-[15px]' > {albumData.name} </p>
                //             <p className='text-[15px] hidden sm:block ' > 5 days ago</p>
                //             <p className='text-[15px] text-center ' > {item.duration}  </p>



                //         </div>
                //     })
                /* </div> */

            }

        </>

    )
}

export default DisplayAlbum
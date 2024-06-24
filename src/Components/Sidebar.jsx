import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


const Sidebar = () => {
    const navigate = useNavigate();





    return (
        //lg-flex
        <div className=' h-full p-2  flex-col gap-2  text-white hidden sm:flex ' >


            <div className='bg-[#121212] h-[20%] rounded flex flex-col justify-evenly ' >
                <div onClick={() => { navigate('/home') }} className='flex items-center  gap-40 pl-8 cursor-pointer' >
                    <div className='flex gap-3' >
                        <img className=' w-6' src={assets.home_icon} alt="" />
                        <p className='font-bold' > Home</p>
                    </div>
                </div>
                <div onClick={() => {
                    navigate('/search')
                }} className='flex items-center gap-3 pl-8 cursor-pointer' >
                    <img className=' w-6' src={assets.search_icon} alt="" />

                    <p className='font-bold' > Search</p>
                </div>

            </div>

            <div className='bg-[#121212] h-[80%]  rounded'>
                <div className='p-4 flex items-center justify-between'>
                    <div className="flex items-center gap-3" >
                        <img className='w-8' src={assets.stack_icon} alt="" />
                        <p className=' font-semibold' >Your library</p>
                    </div>
                    <div className='flex items-center gap-3' >
                        <img className='w-5' src={assets.arrow_icon} alt="" />
                        <img className='w-5' src={assets.plus_icon} alt="" />
                    </div>
                </div>
                <div className='p-3 bg-[#242424] mb-1 rounded font-semibold flex flex-col items-start justify-start gap-1'>
                    <h1>Create your first playlist</h1>
                    <p className=' font-light' >it's easy we will help you</p>
                    <button className=' px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4' >Create Playlist</button>
                </div>

                <div className='p-3 bg-[#242424] mb-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                    <h1>Let's find some podecasts to follow</h1>
                    <p className=' font-light' >We'll keep you update on new episodes</p>
                    <button className=' px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4' >Browse podcasts</button>
                </div>

            </div>

        </div>
    )
}

export default Sidebar
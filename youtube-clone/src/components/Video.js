import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant'
import VideoCard from './VideoCard'
import {Link} from "react-router-dom"

const Video = () => {
  const[videos,setVideos] = useState([])
    useEffect(()=>{
    getVideo()
    },[]);
   
    const getVideo = async()=>{
      const data = await fetch(YOUTUBE_API);
      const json = await data.json();
      setVideos(json.items)
    }

  return (
    <div>
      <div className='grid md:grid-cols-4 grid-cols-2'>
      {
        videos.map(videos=>
           <Link  key = {videos.id} to ={"/watch?v="+videos.id}><VideoCard info = {videos}/></Link>)
      }
      </div>
    </div>
  )
}

export default Video
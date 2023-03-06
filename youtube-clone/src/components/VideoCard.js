import React from 'react'

const VideoCard = ({info}) => {
    const {snippet,statistics} = info;
    const {title, channelTitle,thumbnails} = snippet;
    const { viewCount} = statistics
  return (
    <div className='p-2 m-2 border border-gray-100 shadow-lg lg:w-72'>
        <img src={thumbnails.medium.url}
        alt = "thumbnails"
        className='rounded'/>
       <ul>
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
       </ul>
    </div>
  )
}

export default VideoCard
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice'

const WatchPage = () => {
  const[searchParams] = useSearchParams()
  console.log(searchParams.get("v"))
  const dispatch = useDispatch()
  useEffect(()=>{
  dispatch(closeMenu())
  })
  return (
    <div className='p-2 m-2'>
      <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage
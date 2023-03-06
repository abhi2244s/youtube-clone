import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constant'

const Header = () => {
   const[searchQuery,setSearchQuery] = useState("")
   const [suggestion,setSuggestion] = useState([])
   const[showSuggestion,setShowSuggestion] = useState(true)
   console.log(searchQuery)
   useEffect(()=>{    
   const getSearchSuggestion = async()=>{
      const data = await fetch(YOUTUBE_SEARCH_API +searchQuery);
      const json = await data.json();
      console.log(json)
      setSuggestion(json[1])
   }
      const timer = setTimeout(()=> getSearchSuggestion(),200)
      return ()=>{
         clearTimeout(timer)
      }
   },[searchQuery])

   const dispatch = useDispatch()
   const toggleMenuHandler = ()=>{
      dispatch(toggleMenu())
   }
  return (
    <nav className='flex justify-between items-center shadow-lg flex-wrap md:flex'>
     <div className='flex p-2 m-2'>
        <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII=" alt= "menu" className='h-[40px] mx-3 cursor-pointer' onClick={()=>toggleMenuHandler()}/>
        <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt= "youtube-logo" className='h-[20px] mt-2'/>
     </div>
     <div className='p-2 m-2'>
        <input type="text"  className='border border-gray-400 w-[350px] rounded-l-full p-2'
        value={searchQuery} onChange ={(e)=>setSearchQuery(e.target.value)}
        onFocus = {()=>setShowSuggestion(true)}
        onBlur = {()=>setShowSuggestion(false)}/>
        <button className='bg-gray-100 rounded-r-full p-2'>Search</button>
        {
         showSuggestion&&<div className='fixed bg-white p-2 w-[25rem] rounded-lg shadow-lg border-gray-100'>
         <ul>
           {
              suggestion.map((s)=><li key = {s}className='py-2 hover:bg-gray-100'>{s}</li>)
           }
         </ul>
       </div>
        }
        
     </div>
     <div className='p-2 m-2'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-DjoQ3H0LFCWXLurl6qeHzGnbox2_cJTAmg&usqp=CAU' alt='user' className='h-[40px]'/>
     </div>
    </nav>
  )
}

export default Header
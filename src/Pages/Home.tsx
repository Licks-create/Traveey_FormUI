import React from 'react'
import {Link,Outlet} from "react-router-dom"
import img1 from "../assets/assets/images/bg-sidebar-desktop.svg"
const Home = () => {
  return (
    <div className='grid w-2/5 mx-auto border-2 border-sky-500 bg-white p-2 rounded-xl' style={{gridTemplateColumns:"30% 70%"}}>

    <div className='flex flex-col  mx-auto h-full justify-items-start rounded-xl' style={{background:`url(${img1}) center center/cover `}}>
      {/* Home page */}

      <div  className='mx-10 my-0 text-white p-2 rounded-xl'>
        <h6 className='text-xs text-neutral-300'style={{fontSize:"10px"}}>STEP 1</h6>
      <Link to={"/"}className='text-xs' >YOUR INFO</Link>
      </div>


      <div  className='mx-10 my-0 text-white p-2 rounded-xl'>
        <h6 className='text-xs text-neutral-300' style={{fontSize:"10px"}}>STEP 2</h6>
        <Link to={"/select-plan"}className='text-xs' >SELECT PLAN</Link>
      </div>


      <div  className='mx-10 my-0 text-white p-2 rounded-xl'>
        <h6 className='text-xs text-neutral-300 text-xs'style={{fontSize:"10px"}}>STEP 3</h6>
      <Link to={"/adds-on"} className='text-xs' >ADDS-ONS</Link>
      </div>


      <div  className='mx-10 my-0 text-white p-2 rounded-xl'>
        <h6 className='text-xs text-neutral-300 text-xs'style={{fontSize:"10px"}}>STEP 4</h6>
      <Link to={"/summary"} className='text-xs'>SUMMARY</Link>
      </div>
      
    </div>
        <Outlet/>
        </div>
  )
}

export default Home

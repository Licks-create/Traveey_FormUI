import React from 'react'
import {Link,Outlet} from "react-router-dom"
import img1 from "../assets/assets/images/bg-sidebar-desktop.svg"
const Home = () => {
  return (
    <div className='grid w-3/5 h-3/5 mx-auto  bg-white p-2 rounded-xl' style={{gridTemplateColumns:"25% 70%"}}>

    <div className='flex flex-col justify-start  items-baseline  rounded-xl' style={{background:`url(${img1}) no-repeat center center/cover `}}>
     

      <div  className='mx-12 mt-5 text-start my-0 text-white p-2 rounded-xl relative group cursor-pointer'>
<span className='border-2 group-hover:bg-green-100 group-hover:text-black border-white absolute rounded-full w-9 h-3/5 flex items-center justify-center top-3 ' style={{left:"-35px"}}>1</span>
        <h6 className='text-xs text-neutral-300'style={{fontSize:"10px"}}>STEP 1</h6>
      <Link to={"/"}className='text-xs' >YOUR INFO</Link>
      </div>


      <div  className='mx-12 text-start my-0 text-white p-2 rounded-xl relative hover: span group cursor-pointer'>
        <span className='border-2 group-hover:bg-green-100 group-hover:text-black border-white absolute rounded-full w-9 h-3/5 flex items-center justify-center top-3' style={{left:"-35px"}}>2</span>
        <h6 className='text-xs text-neutral-300' style={{fontSize:"10px"}}>STEP 2</h6>
        <Link to={"/select-plan"}className='text-xs' >SELECT PLAN</Link>
      </div>


      <div  className='mx-12 text-start my-0 text-white p-2 rounded-xl relative group cursor-pointer'>
        <span className='border-2 group-hover:bg-green-100 group-hover:text-black border-white absolute rounded-full w-9 h-3/5 flex items-center justify-center  top-3' style={{left:"-35px"}}>3</span>
        <h6 className='text-xs text-neutral-300 'style={{fontSize:"10px"}}>STEP 3</h6>
      <Link to={"/adds-on"} className='text-xs' >ADDS-ONS</Link>
      </div>


      <div  className='mx-12 text-start my-0 text-white p-2 rounded-xl relative group cursor-pointer'>
        <span className='border-2 group-hover:bg-green-100 group-hover:text-black border-white absolute rounded-full w-9 h-3/5 flex items-center justify-center top-3 ' style={{left:"-35px"}}>4</span>
        <h6 className='text-xs text-neutral-300 'style={{fontSize:"10px"}}>STEP 4</h6>
      <Link to={"/summary"} className='text-xs'>SUMMARY</Link>
      </div>
      
    </div>
        <Outlet/>
        </div>
  )
}

export default Home

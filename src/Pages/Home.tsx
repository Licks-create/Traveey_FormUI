import React from 'react'
import {Link,Outlet} from "react-router-dom"
import img1 from "../assets/assets/images/bg-sidebar-desktop.svg"
const Home = () => {
  return (
    <div className='grid w-3/4 mx-auto border-2 border-sky-500 bg-white p-2 rounded-xl' style={{gridTemplateColumns:"30% 70%"}}>

    <div className='flex flex-col  mx-auto h-full justify-items-start rounded-xl' style={{background:`url(${img1}) center center/cover`}}>
      {/* Home page */}
      <div  className='mx-10 my-0 text-white p-2 rounded-xl'>
        <h6 className='text-xs text-red-300'>STEP 1</h6>
      <Link to={"/"} >YOUR INFO</Link>
      </div>

      <div  className='mx-10 my-0 text-white p-2 rounded-xl'>
        <h6 className='text-xs text-red-300'>STEP 2</h6>
        <Link to={"/select-plan"} >SELECT PLAN</Link>
      </div>

      <div  className='mx-10 my-0 text-white p-2 rounded-xl'>
        <h6 className='text-xs text-red-300'>STEP 3</h6>
      <Link to={"/adds-on"} >ADDS-ONS</Link>
      </div>
      <div  className='mx-10 my-0 text-white p-2 rounded-xl'>
        <h6 className='text-xs text-red-300'>STEP 4</h6>
      <Link to={"/summary"} >SUMMARY</Link>
      </div>
      
    </div>
        <Outlet/>
        </div>
  )
}

export default Home

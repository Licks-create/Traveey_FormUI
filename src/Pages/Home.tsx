/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react'
import {Link,Outlet} from "react-router-dom"
import { useRef } from 'react'
import img1 from "../assets/assets/images/bg-sidebar-desktop.svg"

export function showcolor(e:React.MouseEvent<HTMLElement>,id:string):void{
  const allSerials=window.document.querySelectorAll('.serial-no');
  Array.from(allSerials).map((ele:Element):void=>{
    ele.classList.remove('bg-green-100')
    ele.classList.remove('text-black')
  })
  window.document.getElementById(id)?.classList.add('bg-green-100')
  window.document.getElementById(id)?.classList.add('text-black')
}

const Home = () => {

  return (
    <div className='grid w-2/4 h-3/5 mx-auto  bg-white p-3 rounded-xl' style={{gridTemplateColumns:"30% 70%"}}>

    <div className='flex flex-col justify-start  items-baseline  rounded-xl' style={{background:`url(${img1}) no-repeat center center/cover `}}>
     

      <div  className='mx-12 mt-5 text-start my-0 text-white p-2 rounded-xl relative group cursor-pointer'>
<span className='transition border-2 group-hover:bg-green-100 group-hover:text-black border-white absolute rounded-full w-9 h-3/5 flex items-center justify-center top-3 serial-no  '    style={{left:"-35px"}} id='1s'>1</span>
        <h6 className='text-xs text-neutral-300'style={{fontSize:"10px"}}>STEP 1</h6>
      <Link to={"/"}className='text-xs' onClick={(e)=>showcolor(e,'1s')} >YOUR INFO</Link>
      </div>


      <div  className='mx-12 text-start my-0 text-white p-2 rounded-xl relative  span group cursor-pointer'>
        <span className='transition border-2 group-hover:bg-green-100 group-hover:text-black border-white absolute rounded-full w-9 h-3/5 flex items-center justify-center top-3 serial-no'    style={{left:"-35px"}} id='2s'>2</span>
        <h6 className='text-xs text-neutral-300' style={{fontSize:"10px"}}>STEP 2</h6>
        <Link to={"/select-plan"}className='text-xs' onClick={(e)=>showcolor(e,'2s')} >SELECT PLAN</Link>
      </div>


      <div  className='mx-12 text-start my-0 text-white p-2 rounded-xl relative group cursor-pointer'>
        <span className='transition border-2 group-hover:bg-green-100 group-hover:text-black border-white absolute rounded-full w-9 h-3/5 flex items-center justify-center  top-3 serial-no'    style={{left:"-35px"}} id='3s'>3</span>
        <h6 className='text-xs text-neutral-300 'style={{fontSize:"10px"}}>STEP 3</h6>
      <Link to={"/adds-on"} className='text-xs' onClick={(e)=>showcolor(e,'3s')} >ADDS-ONS</Link>
      </div>


      <div  className='mx-12 text-start my-0 text-white p-2 rounded-xl relative group cursor-pointer'>
        <span className='transition border-2 group-hover:bg-green-100 group-hover:text-black border-white absolute rounded-full w-9 h-3/5 flex items-center justify-center top-3  serial-no'    style={{left:"-35px"}} id='4s'>4</span>
        <h6 className='text-xs text-neutral-300 'style={{fontSize:"10px"}} >STEP 4</h6>
      <Link to={"/summary"} className='text-xs' onClick={(e)=>showcolor(e,'4s')}>SUMMARY</Link>
      </div>
      
    </div>
        <Outlet/>
        </div>
  )
}

export default Home

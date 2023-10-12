/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { showcolor } from './Home';
type numArray=number[];
let data:numArray=[1,1,3,4];
data=[1,2,3]
let prinFun:(name:string)=>undefined;

const AddsOn:React.FC = ():React.JSX.Element => {
    useEffect(()=>{
        window.document.getElementById('3s')?.classList.add('bg-green-100')
        window.document.getElementById('3s')?.classList.add('text-black')
      },[])
    const navigate:NavigateFunction=useNavigate()
  return (
    <main className="personal-info w-3/4 mx-auto bg-white  text-black">
        <section className="header p-5">
                <h2 className="text-3xl text-start">
                   Pick adds-on
                </h2>
                <h4 className='text-neutral-400 text-sm'>
                   Add-ons help enhance your gamming experience.
                </h4>
        </section>
        <section className='adds-data'>
            <div className='adds-on relative' 
            style={{height:"42vh"}}
            >
                <div className="services flex flex-col justify-center h-3/4">
                    <div className="services-types">

                            <div className="online-services 
                            hover:border-blue-400 transition h-16 p-2 
                            
                             cursor-pointer
                            rounded-lg border-2 "
                            
                            
                            >
                                <div className="details flex justify-between items-center">

                                    <div className=' flex self-start'>

                                    <input type="checkbox" name="online-service" id="" />
                                    <div className='flex flex-col mx-4'>

                                        <span className=''>Online Service</span>
                                        <span className='text-neutral-400 text-sm' >Access to multiple games</span>
                                    </div>
                                    </div>
                                    <span className='price text-blue-400 '>+1/mo</span>

                                </div>
                            </div>


                            <div className="online-services 
                            hover:border-blue-400 transition h-16 p-2  cursor-pointer rounded-lg border-2 my-2"
                            
                            
                            >
                                <div className="details flex justify-between items-center">

                                    <div className=' flex self-start'>

                                    <input type="checkbox" name="online-service" id="" />
                                    <div className='flex flex-col mx-4'>

                                        <span className=''>Larger Storage</span>
                                        <span className='text-neutral-400 text-sm' >Extra 1TB of cloud save</span>
                                    </div>
                                    </div>
                                    <span className='price text-blue-400 '>+1/mo</span>

                                </div>
                            </div>


                            <div className="online-services 
                            hover:border-blue-400 transition h-16 p-2  cursor-pointer rounded-lg border-2 "
                            
                            
                            >
                                <div className="details flex justify-between items-center">

                                    <div className=' flex self-start'>

                                    <input type="checkbox" name="online-service" id="" />
                                    <div className='flex flex-col mx-4'>

                                        <span className=''> Customizable Profile</span>
                                        <span className='text-neutral-400 text-sm' >Custom theme on your profile</span>
                                    </div>
                                    </div>
                                    <span className='price text-blue-400 '>+1/mo</span>

                                </div>
                            </div>



                            
                    </div>
                </div>

                <div className="button-next-step cursor-pointer flex justify-between absolute bottom-0 left-0 w-full " 
                // style={{top:"100%"}}
                >
                    <button type='button' onClick={(e)=>{navigate('/select-plan'); showcolor(e,'2s')}} className='bg-blue-800 text-white p-3 rounded-md '>Go Back</button>
                    <button type='button' onClick={(e)=>{navigate('/summary'); showcolor(e,'4s')}} className='bg-blue-800 text-white p-3 rounded-md'>Next Step</button>
                </div>
            </div>
        </section>
    </main>
  )
}

export default AddsOn

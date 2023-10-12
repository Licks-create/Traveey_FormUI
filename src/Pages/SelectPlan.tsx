/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react'
import {Link,NavigateFunction,useNavigate} from "react-router-dom"
import { showcolor } from './Home'
import arcade from "../assets/assets/images/icon-arcade.svg"
import advanced from "../assets/assets/images/icon-advanced.svg"
import pro from "../assets/assets/images/icon-pro.svg"

const SelectPlan = () => {
    useEffect(()=>{
        window.document.getElementById('2s')?.classList.add('bg-green-100')
        window.document.getElementById('2s')?.classList.add('text-black')
      },[])
    const navigate:NavigateFunction=useNavigate()
  return (
    <main className="personal-info w-3/4 mx-auto bg-white  text-black">
        <section className="header py-5">
                <h2 className="text-3xl text-start">
                    Select your plan
                </h2>
                <h4 className='text-neutral-400 text-sm'>
                    You have the option of monthly or yearly biling
                </h4>
        </section>
        <section className='personal-data'>
            <div className='plan flex flex-col'>

                <div className="boxes flex h-40">
                    <div className='border-2 w-1/3  rounded-xl p-2 flex flex-col justify-between hover:border-2 
                     cursor-pointer hover:border-blue-600 transition'>
                        <div>
                            <img src={arcade} alt="arcadeImage" />
                        </div>
                        <div>
                            <span className='block'>Arcade</span>
                            <span className='text-neutral-400 text-sm'>$9/yr</span>
                        </div>
                    </div>
                    <div className='border-2 w-1/3  rounded-xl p-2 flex flex-col justify-between mx-2 hover:border-2
                     cursor-pointer  hover:border-blue-600 transition'>
                        <div>
                            <img src={advanced} alt="arcadeImage" />
                        </div>
                        <div>
                            <span className='block'>Advanced</span>
                            <span className='text-neutral-400 text-sm'>$9/yr</span>
                        </div>
                    </div>
                    <div className='border-2 w-1/3  rounded-xl p-2 flex flex-col justify-between hover:border-2
                     cursor-pointer  hover:border-blue-600 transition'>
                        <div>
                            <img src={pro} alt="arcadeImage" />
                        </div>
                        <div>
                            <span className='block'>Pro</span>
                            <span className='text-neutral-400 text-sm'>$9/yr</span>
                        </div>
                    </div>
                   
                </div>
                <div className="month-year h-12 my-5 flex items-center justify-center bg-slate-200">

                    <span>Monthly</span>
                    <div className='toggle'>
                        <input type="checkbox"/>
                    </div>
                    <span>Yearly</span>

                </div>

                

            

                <div className="button-next-step cursor-pointer flex justify-between ">
                    <button type='button' onClick={(e)=>{navigate('/'); showcolor(e,'1s')}} className='bg-blue-800 text-white p-3 rounded-md '>Go Back</button>
                    <button type='button' onClick={(e)=>{navigate('/adds-on'); showcolor(e,'3s')}} className='bg-blue-800 text-white p-3 rounded-md'>Next Step</button>
                </div>
            </div>
        </section>
    </main>
  )
}

export default SelectPlan

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react'
import {Link, NavigateFunction, useNavigate } from 'react-router-dom'
import { showcolor } from './Home'

const Summary = () => {
    const navigate:NavigateFunction=useNavigate()
    useEffect(()=>{
        window.document.getElementById('4s')?.classList.add('bg-green-100')
        window.document.getElementById('4s')?.classList.add('text-black')
      },[])
  return (
    <main className="personal-info w-3/4 mx-auto bg-white  text-black">
        <section className="header p-5">
                <h2 className="text-3xl text-start">
                    Finishing-Up
                </h2>
                <h4 className='text-neutral-400 text-sm'>
                    Please provide your name, email address and phone number.
                </h4>
        </section>
        <section className='personal-data'>
            <form action="">
                <div className="name p-4">
                    <label htmlFor="name" className='block'>Name</label>
                <input className='mt-2'  id='name' type="text" />
                </div>

                <div className="email p-4">
                    <label htmlFor="email" className='block' >Email</label>
                    <input type="email" className='mt-2' id='email'/>
                </div>

                <div className="number p-4">
                    <label htmlFor="number" className='block' >Phone number</label>
                    <input type="number" className='mt-2' id='number' />
                </div>
                <div className="button-next-step cursor-pointer flex justify-between">
                    <button type='button' onClick={(e)=>{navigate('/adds-on'); showcolor(e,'3s')}} className='bg-blue-800 text-white p-3 rounded-md '>Go Back</button>
                    <button type='button' onClick={(e)=>{navigate('/select-plan')}} className='bg-blue-400 text-white p-3 rounded-md cursor-not-allowed' >Confirm</button>
                </div>
            </form>
        </section>
    </main>
  )
}

export default Summary

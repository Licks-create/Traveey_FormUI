/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react'
import {Link, NavigateFunction, useNavigate } from 'react-router-dom'
import logo from "../assets/assets/images/icon-thank-you.svg"

const Confirm = () => {
    const allSerials=window.document.querySelectorAll('.serial-no');
  Array.from(allSerials).map((ele:Element):void=>{
    ele.classList.remove('bg-green-100')
    ele.classList.remove('text-black')
  })
    const navigate:NavigateFunction=useNavigate()
    useEffect(()=>{
        window.document.getElementById('4s')?.classList.add('bg-green-100')
        window.document.getElementById('4s')?.classList.add('text-black')
      },[])
  return (
    <main className='p-2 '
    style={{height:"50vh"}}
    >
            <section className="thanks h-full flex flex-col
             justify-center items-center
            text-black w-2/3 m-auto">
                <div className="logo">
                    <img className=' object-contain h-12' src={logo} alt="" />
                </div>
                <div className="">
                        <h1 className=' text-center text-2xl my-3'>
                        Thank you!
                        </h1>
                    <div className="desc text-sm text-slate-400">
                        
Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
                    </div>
                </div>
            </section>
    </main>  )
}

export default Confirm

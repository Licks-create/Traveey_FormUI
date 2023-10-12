/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react'
import {Link, NavigateFunction, useNavigate } from 'react-router-dom'
import { showcolor } from './Home'

const Summary = () => {
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
    <main className="personal-info w-3/4 mx-auto bg-white  text-black relative">
        <section className="header py-5">
                <h2 className="text-3xl text-start">
                    Finishing-Up
                </h2>
                <h4 className='text-neutral-400 text-sm'>
                    Please provide your name, email address and phone number.
                </h4>
        </section>
        <section className='personal-data'>
            <section className=""
            style={{height:"42vh"}}            
            >
                <div className='total-bill relative h-4/5'>

                    <div className="bill-list rounded-xl py-2">
                        <div className="bil1 flex justify-between items-center 
                     rounded-t-lg    
                    bg-slate-100 p-2  cursor-pointer"
                       
                        >
                            <div className="des group transition grow">
                                <div className='text-sm
                                text-slate-400
                                 group-hover:text-slate-800 my-2   '>Arcade(Monthly)
                                </div>
                                <Link to={"/select-plan"}
                                className='text-xs 
                                hidden
                                transition
                              text-blue-500 
                              group-hover:block
                              group-hover:underline
                              '
                                >Change</Link>
                            </div>
                            <div className="amount text-sm text-blue-500">
                                $9/mo
                            </div>
                        </div>
                        <div className="bil1 flex justify-between items-center bg-slate-100 p-2  cursor-pointer">
                            <div className="des group transition grow">
                                <div className='text-sm 
                                text-neutral-400 
                                group-hover:text-slate-800 
                                my-2'>Advanced(Monthly)</div>
                                <Link to={"/select-plan"}
                                className='text-xs text-blue-500 hidden
                                  group-hover:block
                                  group-hover:underline
                                   relative
                                '
                                >Change
                            <hr className='border-2 bg-black absolute bottom-0 max-w-full' />
                                </Link>
                            </div>
                            <div className="amount text-sm text-blue-500">
                                $9/mo
                            </div>
                        </div>
                        <div className="bil1 flex justify-between items-center 
                     rounded-b-lg                       bg-slate-100 p-2  cursor-pointer">
                            <div className="des group transition grow">
                                <div className='text-sm text-neutral-400 
                                 group-hover:text-slate-800  my-2'>Pro(Monthly)</div>
                                <Link to={"/select-plan"}
                                className='text-xs 
                                hidden text-blue-500
                                  group-hover:block
                                  group-hover:underline
                                '
                                >Change</Link>
                            </div>
                            <div className="amount  text-sm text-blue-500">
                                $9/mo
                            </div>
                        </div>
                        <div className="total flex justify-between my-4 px-2 absolute w-full bottom-12">
                        <div className='text-neutral-400 text-sm'>Total(per Month)</div>
                        <div className='text-sm text-blue-500'>$120/mo</div>
                        </div>
                    </div>

                </div>
                <div className="button-next-step cursor-pointer flex justify-between absolute bottom-0 left-0 w-full group">
                    <button type='button' onClick={(e)=>{navigate('/adds-on'); showcolor(e,'3s')}} className='bg-blue-800 text-white p-3 rounded-md '>Go Back</button>
                    <button type='button' onClick={(e)=>{navigate('/confirm')}} className='bg-blue-800 text-white p-3 rounded-md  group-hover:bg-blue-600' >Confirm</button>
                </div>
            </section>
        </section>
    </main>
  )
}

export default Summary

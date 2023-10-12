/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect ,useState} from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { showcolor } from './Home';


const AddsOn:React.FC = ():React.JSX.Element => {
    const [onlineCheck,setOnlineCheck]=useState(false)
    const [largerStoreCheck,setLargerStoreCheck]=useState(false)
    const [customCheck,setCustomCheck]=useState(false)
    const handleAdds=(e:React.MouseEvent<HTMLElement>)=>{
        const element:HTMLElement|null=window.document.querySelector(`#${e.currentTarget.id} .details .items input`)
        element?.click()
        console.log(Boolean(element?.getAttribute('checked')))
        if(Boolean(element?.getAttribute('checked'))===false)
        {
           setOnlineCheck(true)
        }
        else{
            setOnlineCheck(false)
    }
        
        
    }
    useEffect(()=>{
        const allSerials=window.document.querySelectorAll('.serial-no');
  Array.from(allSerials).map((ele:Element):void=>{
    ele.classList.remove('bg-green-100')
    ele.classList.remove('text-black')
  })
        window.document.getElementById('3s')?.classList.add('bg-green-100')
        window.document.getElementById('3s')?.classList.add('text-black')
      },[])
    const navigate:NavigateFunction=useNavigate()
  return (
    <main className="personal-info w-3/4 mx-auto bg-white  text-black relative">
        <section className="header py-5">
                <h2 className="text-3xl text-start">
                   Pick adds-on
                </h2>
                <h4 className='text-neutral-400 text-sm'>
                   Add-ons help enhance your gamming experience.
                </h4>
        </section>
        <section className='adds-data'>
            <div className='adds-on ' 
            style={{height:"42vh"}}
            >
                <div className="services flex flex-col justify-center h-3/4">
                    <div className="services-types">

                            <div className="online-services 
                            hover:border-blue-400 transition h-16 p-2                              cursor-pointer
                            rounded-lg border-2 "
                            id='online-services'
                             onClick={(e)=>{setOnlineCheck(!onlineCheck)
                                e.currentTarget.classList.toggle("bg-slate-100")}
                            }
                            >
                                <div className="details flex justify-between items-center">

                                    <div className='items flex self-start'>

                                    <input type="checkbox" name="online-service" id="" checked={onlineCheck}/>
                                    <div className='flex flex-col mx-4'>

                                        <span className=''>Online Service</span>
                                        <span className='text-neutral-400 text-sm' >Access to multiple games</span>
                                    </div>
                                    </div>
                                    <span className='price text-blue-400 text-xs '>+9/mo</span>

                                </div>
                            </div>


                            <div className="larger-storage 
                            hover:border-blue-400 transition h-16 p-2  cursor-pointer rounded-lg border-2 my-2"
                            onClick={(e)=>{setLargerStoreCheck(!largerStoreCheck)
                                e.currentTarget.classList.toggle("bg-slate-100")
                            }}
                             id='larger-storage'
                            >
                                <div className="details flex justify-between items-center">

                                    <div className='items flex self-start'>

                                    <input type="checkbox" name="larger-storage" id="" checked={largerStoreCheck} />
                                    <div className='flex flex-col mx-4'>

                                        <span className=''>Larger Storage</span>
                                        <span className='text-neutral-400 text-sm' >Extra 1TB of cloud save</span>
                                    </div>
                                    </div>
                                    <span className='price text-blue-400 text-xs'>+10/mo</span>

                                </div>
                            </div>


                            <div className="custimizable 
                            hover:border-blue-400 transition h-16 p-2  cursor-pointer rounded-lg border-2 
                             
                            "
                            onClick={(e:React.MouseEvent<HTMLElement>)=>{setCustomCheck(!customCheck)
                            e.currentTarget.classList.toggle("bg-slate-100")
                            }}
                             id='custimizable'
                             
                            >
                                <div className="details flex justify-between items-center">

                                    <div className='items flex self-start'>

                                    <input type="checkbox" name="custimizable" id="" checked={customCheck} />
                                    <div className='flex flex-col mx-4'>

                                        <span className=''> Customizable Profile</span>
                                        <span className='text-neutral-400 text-sm' >Custom theme on your profile</span>
                                    </div>
                                    </div>
                                    <span className='price text-blue-400 text-xs'>+20/mo</span>

                                </div>
                            </div>



                            
                    </div>
                </div>

                <div className="button-next-step cursor-pointer flex justify-between absolute bottom-0 left-0 w-full " 
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

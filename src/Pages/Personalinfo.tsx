/* eslint-disable @typescript-eslint/no-unused-vars */
import React,{useEffect} from 'react'
import {NavigateFunction, useNavigate} from "react-router-dom"
import { showcolor } from './Home';
import { useFormik } from 'formik'
type userInfo={
    name?:string,
    email?:string,
    number?:string
};


const initialValues:userInfo={
    name:'',
    email:'',
    number:''
}


const validate = (values:userInfo):userInfo => {
    const errors:userInfo = {};
    console.log(values)
    if(!values.name){
        errors.name="Required*"
        return errors
    }
    else  if (!values.email) {
      errors.email = 'Required*';
      return errors
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';

      return errors
    }
    else  if(!values.number)
    {
        errors.number="Required*"
    }
    console.log(errors)
    return errors;
  };
  
const Personalinfo:React.FC = ():React.JSX.Element => {
    useEffect(()=>{
        const allSerials=window.document.querySelectorAll('.serial-no');
  Array.from(allSerials).map((ele:Element):void=>{
    ele.classList.remove('bg-green-100')
    ele.classList.remove('text-black')
  })
        window.document.getElementById('1s')?.classList.add('bg-green-100')
        window.document.getElementById('1s')?.classList.add('text-black')
      },[])
    const navigate:NavigateFunction=useNavigate();
    const formik=useFormik({
        initialValues,
        validate,
        // validateOnBlur:false,
        // validateOnChange:false,
        onSubmit:async values=>{
            
        }
    })
    console.log(formik.errors)
  return (
    <main className="personal-info w-3/4 mx-auto bg-white  text-black relative"
    
    >
        <section className="header py-5">
                <h1 className="text-3xl text-start">
                    Personal info
                </h1>
                <div className='text-neutral-400 text-sm'>
                    Please provide your name, email address and phone number.
                </div>
        </section>
        <section className='personal-data'
        >
            <form action="#" onSubmit={formik.handleSubmit}
        style={{height:"40vh"}}
            className=''
            >
                <div className="name px-4  my-4">
                    <label htmlFor="name" className='inline-block'>Name</label>{formik.errors.name?<span className='text-xs px-3 text-red-400'>{formik.errors.name}</span>:null}
                <input
                //  {...formik.getFieldProps('name')}  
                onChange={formik.handleChange}
                value={formik.values.name}
                className='mt-2 w-full h-10 rounded-lg pl-2 outline-none border-none shadow-lg'  id='name' name='name' type="text" placeholder='e.g Vivekanand ojha' />
                
                </div>

                <div className="email px-4 my-4">
                    <label htmlFor="email" className='inline-block' >Email</label>{formik.errors.email?<span className='text-xs px-3 text-red-400'>{formik.errors.email}</span>:null}
                    <input 
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    // {...formik.getFieldProps('email')} 
                     type="email" className='mt-2 w-full h-10 rounded-lg pl-2 outline-none border-none shadow-lg' id='email' placeholder='e.g abc123@gmail.com' name='email'/>
                </div>
                
                <div className="number px-4 my-4">
                    <label htmlFor="number" className='inline-block' >Phone number</label>{formik.errors.number?<span className='text-xs px-3 text-red-400'>{formik.errors.number}</span>:null}
                    <input 
                    //  {...formik.getFieldProps('number')} 
                    onChange={formik.handleChange}
                    value={formik.values.number}
                    type="number" className='mt-2 w-full h-10 rounded-lg pl-2 outline-none border-none shadow-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' id='number' placeholder='e.g +91 9118372331' name='number' />
                </div>

                <div className="button-next-step cursor-pointer flex justify-end  absolute bottom-0 left-0 w-full ">
                    <button type='button' onClick={(e)=>{navigate('/select-plan'); showcolor(e,'2s')}} className='bg-blue-800 text-white p-3 rounded-md' >Next Step</button>
                </div>
            </form>
        </section>
    </main>
  )
}

export default Personalinfo

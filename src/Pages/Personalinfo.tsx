import React from 'react'

const Personalinfo:React.FC = ():React.JSX.Element => {
  return (
    <main className="personal-info w-3/4 mx-auto bg-white  text-black">
        <section className="header p-5">
                <h1 className="text-xl">
                    Personal info
                </h1>
                <div className='text-neutral-400 text-sm'>
                    Please provide your name, email address and phone number.
                </div>
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
            </form>
        </section>
    </main>
  )
}

export default Personalinfo

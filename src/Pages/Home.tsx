import React from 'react'
import {Link,Outlet} from "react-router-dom"
const Home = () => {
  return (
    <div className='flex flex-col' >
      Home page
      <Link to={"/"} className='mx-10 bg-gray-50 p-2 rounded-xl'>personal-info</Link>
      <Link to={"/select-plan"} className='mx-10 bg-gray-50 p-2 rounded-xl'>select-plan</Link>
      <Link to={"/adds-on"} className='mx-10 bg-gray-50 p-2 rounded-xl'>adds-on</Link>
      <Link to={"/summary"} className='mx-10 bg-gray-50 p-2 rounded-xl'>summary</Link>
        <Outlet/>
        </div>
  )
}

export default Home

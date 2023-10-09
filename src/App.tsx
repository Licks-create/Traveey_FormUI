import React from "react"
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Personalinfo from './Pages/Personalinfo'
import SelectPlan from './Pages/SelectPlan'
import AddsOn from './Pages/AddsOn'
import Summary from './Pages/Summary'
const App:React.FC=():React.JSX.Element=> {
 

  return (
    <div className='bg-green-100  font-medium text-sky-500 dark:text-sky-400 h-screen '> 
    
          <Routes>
              <Route path='/' element={<Home/>} >
                <Route index element={<Personalinfo/>}/>
                <Route path='/select-plan' element={<SelectPlan/>}/>
                <Route path='/adds-on' element={<AddsOn/>}/>
                <Route path='/summary' element={<Summary/>}/>
              </Route>
          </Routes>
      
    </div>
  )
}

export default App

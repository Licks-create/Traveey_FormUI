
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Personalinfo from './Pages/Personalinfo'
import SelectPlan from './Pages/SelectPlan'
import AddsOn from './Pages/AddsOn'
import Summary from './Pages/Summary'
function App() {
 

  return (
    <div className='bg-green-100  font-medium text-sky-500 dark:text-sky-400 '> 
      This is app.tsx

      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>} >
                <Route index element={<Personalinfo/>}></Route>
                <Route path='/select-plan' element={<SelectPlan/>}>
                  
                </Route>
                <Route path='/adds-on' element={<AddsOn/>}>

                </Route>
                <Route path='/summary' element={<Summary/>}>

                </Route>

              </Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

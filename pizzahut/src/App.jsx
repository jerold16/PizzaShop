import React from 'react'
import "./css/main.min.css"
import { Routes,Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import "./index.css"
import Home from './Component/Home'
import Login from './Component/Login'
import SignUp from './Component/SignUp'
import Protect from './Component/Protect'
import Welcome from './Component/Welcome'
import HomeNav from './Component/HomeNav'
import Forgot from './Component/Forgot'
import Changepassword from './Component/Changepassword'
import CartList from './ProfileComponent/CartList'
import Profiled from './ProfileComponent/Profiled'
const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/welcome' element={<Protect Child={Welcome}/>}/>
            <Route path='/homenav' element={<Protect Child={HomeNav}/>}/>
            <Route path='/cart' element={<Protect Child={CartList}/>}/>
            <Route path='/profile' element={<Protect Child={Profiled}/>}/>


            <Route path='/ft' element={<Forgot/>}/>
            <Route path='/cp' element={<Changepassword/>}/>
        </Routes>
        </BrowserRouter>
    
    </div>
  )
}

export default App
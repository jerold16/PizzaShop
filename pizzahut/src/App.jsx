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
import Profiled from './ProfileComponent/Profiled'
import Order from './ProfileComponent/Order'
import Contactus from './Component/Contactus'
import Footer from './Component/Footer'
import Menu from './Component/Menu'
import { CartList } from './ProfileComponent/CartList'
const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/welcome/*' element={<Protect Child={Welcome}/>}></Route>
            <Route path='/cartlist' element={<CartList/>}/>
            <Route path='/homenav' element={<Protect Child={HomeNav}/>}/>
            <Route path='/profile' element={<Protect Child={Profiled}/>}/>
            <Route path='/orderpage' element={<Order/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/us' element={<Contactus/>}/>
            <Route path='/ft' element={<Forgot/>}/>
            <Route path='/cp' element={<Changepassword/>}/>
            <Route path='/footer' element={<Footer/>}/>
        </Routes>
        </BrowserRouter>
    
    </div>
  )
}

export default App
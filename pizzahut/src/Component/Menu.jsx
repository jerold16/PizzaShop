import React, { useEffect, useState } from 'react'
import { Button, Container, Nav} from 'react-bootstrap'
import {PizzaCard} from './PizzaCard'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import {Pizzas} from '../ProfileComponent/Pizzas'
import Dessert from '../ProfileComponent/Dessert'
import Drinks from '../ProfileComponent/Drinks'
import Sides from '../ProfileComponent/Sides'
const Menu = () => { 
  let [show,setshow]=useState(false)
  let user=JSON.parse(sessionStorage.getItem("user"))
  useEffect(()=>{
    if(user!=null){
      setshow(true)
    }
  },[])
  return (
    <section id='menu'  className="bg-light">
        <Container className="text-center">
            <div className='my-3'>
                <h2 className="font-poppins font-light text-6xl">
                          EveryDay Menu !
                </h2>
            </div>
              {
                show && <Nav id='catogery'  className='mx-3 mt-5 d-flex justify-between'>
                <Link to="/welcome/*" className='text-decoration-none'><Button variant='' className='text-red-600 font-medium border-none focus:text-black focus:border'>Menu</Button> </Link>
                <Link to="/welcome/pizzas" className='text-decoration-none'><Button variant='' className='text-red-600 font-medium border-none focus:text-black'>Pizzas</Button> </Link>
                <Link to="/welcome/dessert" className='text-decoration-none'><Button variant='' className='text-red-600 font-medium border-none focus:text-black'>Dessert</Button> </Link>
                <Link to="/welcome/drinks" className='text-decoration-none'><Button variant='' className='text-red-600 font-medium border-none focus:text-black'>Drinks</Button> </Link>
                <Link to="/welcome/sides" className='text-decoration-none'><Button variant='' className='text-red-600 font-medium border-none focus:text-black'>Sides</Button> </Link>
                </Nav>
              }
              <hr />
             <Routes>
               <Route path='/*' element={<PizzaCard/>}/>
               <Route path='/pizzas' element={<Pizzas/>}/>
               <Route path='/dessert' element={<Dessert/>}/>
               <Route path='/drinks' element={<Drinks/>}/>
               <Route path='/sides' element={<Sides/>}/>
            </Routes>
        </Container>
        
    </section>

  )
}

export default Menu
import React from 'react'
import { Container } from 'react-bootstrap'
import {PizzaCard} from './PizzaCard'
const Menu = () => {
    
  return (
    <section id="menu" className="bg-light">
        <Container className="text-center">
            <div className='my-3'>
                <h2 className="font-poppins font-light text-6xl">
                          EveryDay Menu !
                </h2>
            </div>
            <PizzaCard/>
        </Container>

    </section>

  )
}

export default Menu
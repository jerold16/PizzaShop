import React from 'react'
import{Row, Col} from "react-bootstrap"
import Banner from './Banner'
import PickoftheWeek from './PickoftheWeek'
import HomeNav from './HomeNav'
import Footer from './Footer'
import { Route, Routes } from 'react-router'
import Menu from './Menu'

const Welcome = () => {
  
    return (
        <section  id=''>
          <HomeNav/>
            <Row className="justify-content-center w-100">
                <Col lg={7} className="">
                  <Banner/>
                </Col>
            </Row>
           <Routes>
            <Route path = '/*' element={<Menu/>}/>
           </Routes>
            <PickoftheWeek/>
            <Footer/>
            
            </section>
      )
    
  
}

export default Welcome
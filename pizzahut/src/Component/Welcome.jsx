import React from 'react'
import{Row, Col} from "react-bootstrap"
import Banner from './Banner'
import Menu from './Menu'
import PickoftheWeek from './PickoftheWeek'
import HomeNav from './HomeNav'
import Footer from './Footer'

const Welcome = () => {
  
    return (
        <section  id=''>
          <HomeNav/>
            <Row className="justify-content-center w-100">
                <Col lg={7} className="">
                  <Banner/>
                </Col>
            </Row>
            <Menu/>
            <PickoftheWeek/>
            <Footer/>
            </section>
      )
    
  
}

export default Welcome
import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import { Container } from 'react-bootstrap';
const Banner = () => {
  return (
    <div>
        <Container fluid>
        <Carousel className='mt-2'>
            <Carousel.Item interval={1000}>
                <img 
                src={require('../image/pizza 4.webp')}
                 className="d-block w-100"
                  alt="AwesomeAmericanVeg" />
                  <Carousel.Caption>
                    <h3>Awesome American veg</h3>
                    <p className="d-none d-sm-block"><h5>Toppings : </h5> Corn , Capsicum , Red peprica</p>
                  </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img 
                src={require('../image/pepo.jpeg')}
                 className="d-block w-100"
                  alt="Pepperoni pizza" />
                  <Carousel.Caption>
                    <h3>Pepperoni Pizza</h3>
                    <p className="d-none d-sm-block"><h5>Toppings : </h5> Mozorella chesee , Pepperone</p>
                  </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img 
                src={require('../image/pizza 5.jpeg')}
                 className="d-block w-100"
                  alt="TandooriPanner" />
                  <Carousel.Caption>
                    <h3>TandoriPanner Pizza</h3>
                    <p className="d-none d-sm-block"><h5>Toppings : </h5> Onion , Panner , Capsicum , Red peprica</p>
                  </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img                 
                src={require('../image/veg.jpeg')}
                 className="d-block w-100"
                  alt="VegSupreme" />
                  <Carousel.Caption>
                    <h3>VegSupreme Pizza</h3>
                    <p className="d-none d-sm-block"><h5>Toppings : </h5> Corn , Capsicum , Red peprica , Black olive , Onion</p>
                  </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img 
             src={require('../image/pizza3.jpeg')}
                 className="d-block w-100"
                  alt="Vegexotica" />
                  <Carousel.Caption>
                    <h3>Vegexotica</h3>
                    <p className="d-none d-sm-block"><h5>Toppings : </h5> Red Capsicum , Green Capsicum , Red peprica , Baby Corn</p>
                  </Carousel.Caption>
            </Carousel.Item>
        </Carousel></Container>
        <div className='text-center mt-4'>
        <h2 className="display-5">Pizza For Every Occassion !</h2>
        <p className="lead text-muted">Enjoy with your Friends, Partner and family</p>
    </div></div>
  )
}

export default Banner
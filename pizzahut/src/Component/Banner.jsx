import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import axios from 'axios';
const Banner = () => {
  useEffect(()=>{
      let fetchall=()=>{
        axios.get(`http://localhost:8080/allcoupon`)
        .then((response)=>{
            sessionStorage.setItem("coupons",JSON.stringify(response.data.data))
        })
        .catch((error)=>{
          console.log(error);
        })
      }
      fetchall()
      fetchcard()
  },[])
  let coupons = JSON.parse(sessionStorage.getItem("coupons"))
  let ido = Math.floor((Math.random() * 7) + 1);
  let [image,setimage]=useState("")
    let fetchcard =()=>{
      try{
        coupons.map((card)=>{
          if(card.id===ido){
             setimage(card.imageurl)
          }
        })
      }
      catch{
        
      }
    }
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
             src={image}
                 className="d-block w-100"
                  alt="Coupon" />
            </Carousel.Item>
        </Carousel></Container>
        <div className='text-center mt-4'>
        <h2 className="display-5">Pizza For Every Occassion !</h2>
        <p className="lead text-muted">Enjoy with your Friends, Partner and family</p>
    </div></div>
  )
}

export default Banner
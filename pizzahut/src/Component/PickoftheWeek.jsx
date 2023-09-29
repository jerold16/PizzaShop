import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Container, Row,Col,Image ,Button, Modal} from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { Items } from './PizzaCard'
const PickoftheWeek = () => {
  let bag=Items
    let [Pizza,setPizza]=useState([])
  const [modalShow, setModalShow] = useState(false);
  let navi=useNavigate()
  let User=JSON.parse(sessionStorage.getItem("user"))
    useEffect(()=>{
        let ido = Math.floor((Math.random() * 9) + 1);
        let fun=()=>{
            axios.get(`http://localhost:8080/menu/${ido}`)
            .then((response)=>{
                setPizza(response.data.data)
                sessionStorage.setItem("pickoftheDay",JSON.stringify(response.data.data))
            })
            .catch((error)=>{
                alert("something went wrong")
                console.log(error)
            })
        }
        fun()
    },[])
    function MyVerticallyCenteredModal(props) {
        if(User!=null){
          return (
            <Modal
            {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered>
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                 Dear Customer ,
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Your pizza added to the Cart
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
              </Modal.Footer>
            </Modal>
          );
        }
        else{
          return (
          <Modal
          {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Login Warning
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Dear Customer ,</h4>
              <p>
                Please login before you add pizza to the Cart
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
        }
    }
    
    let order=(e)=>{
        e.preventDefault()
        if(User!=null){
          let order=JSON.parse(sessionStorage.getItem("pickoftheDay"))
          let name= order.name
          let cost=order.price
          let del_time="within 45 mins"
          bag.push({name,cost,del_time}) 
          navi("/welcome")
          setModalShow(true)
        }
        else
          setModalShow(true)
      }
  return (
    <section id='mustry' className="">
        <Container className="text-center">
             <h2 className="m-10 h1 display-5 font-light">
                Pick of the week!!!
             </h2>
             <Row className="m-md-5 p-md-5 justify-center border border-5" >
                
                <Col md={7}  className="">
                <Image src={Pizza.imageurl} fluid={true} ></Image>
                </Col>
                <Col md={5} className="" >
                    <h1 className="h1">{Pizza.name}</h1>
                    <p className="lead">{Pizza.toppings}</p>
                    <p className="lead">Rs : {Pizza.price}</p>
                    <Button variant="primary" onClick={order}>Add to cart</Button>
                </Col>
             </Row>
        </Container>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}/>
    </section>
  )
}

export default PickoftheWeek
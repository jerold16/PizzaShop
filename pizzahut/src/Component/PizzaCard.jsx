import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card,Button, Row , Col  } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router';
import { pizzaop } from '../ProfileComponent/Pizzas';
let Items=[]
const 
PizzaCard = () => {
  let [pizza,setPizza] =useState([])
  let navi=useNavigate()
  const [modalShow, setModalShow] = useState(false);
  let User=JSON.parse(sessionStorage.getItem("user"))
  useEffect(()=>{
    let view=()=>{
      axios.get(`http://localhost:8080/menu`)
      .then((response)=>{
        setPizza(response.data.data)
        sessionStorage.setItem("menu",JSON.stringify(response.data.data))
      })
      .catch((error)=>{
        console.log(error)
        alert("something went wrong")
      })}
   view()
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
                  Your item added to the Cart
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
                Please login before you add item to the Cart
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
        }
        
      }
  return (
    <div  className='text-center'>
      <Row> 
        {
        pizza.map((pi)=>{
          sessionStorage.setItem(`${pi.id}`,JSON.stringify(pi))
          let U =JSON.parse(sessionStorage.getItem("user"))
         
          let order=(e)=>{
            e.preventDefault()
            if(U!=null){
              let order=JSON.parse(sessionStorage.getItem(`${pi.id}`))
              let name= order.name
              let cost=order.price
              let del_time="within 45 mins"
              Items.push({name,cost,del_time})
              navi("/welcome/*")
              setModalShow(true)
            }
            else
              setModalShow(true)
          }
          return(
            <Col md={6} lg={4} key={pi.id}>
            <Card  className="m-3">
<Card.Img variant='top' src={pi.imageurl} className="" />
        <Card.Body>
            <Card.Title className="text-center">
                    {pi.name}
            </Card.Title>
            <Card.Text>
            {pi.toppings}
            </Card.Text>
            <Card.Text>
             Rs : {pi.price}
            </Card.Text>
            <div className="text-center">
          <Button variant="primary" type='button' onClick={order} >Add to the Cart  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg></Button>
            </div>
        </Card.Body>
        </Card>
        </Col>
          )
        })
      }     
          </Row>      
          <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}/>
    </div>
  )
}
export  {PizzaCard,Items}